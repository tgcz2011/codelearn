import { WasmRunner } from '../WasmRunner'
import type { RunOptions, RunnerOutput } from '../types'

/** 默认执行超时 5 秒 */
const DEFAULT_JS_TIMEOUT_MS = 5000

/**
 * 在隐藏 iframe 中执行 JS，通过 postMessage 捕获 console.log/info/warn/error
 * 与未捕获异常，返回 stdout / stderr。
 *
 * 注：postMessage 严格保序，故同步代码在 "done" 之前发出的所有日志
 * 都会先于 "done" 到达父窗口。异步代码（setTimeout / Promise）可能
 * 在 resolve 之后产生日志，此类输出不会被捕获——这对学习场景的同步
 * 练习足够。超时作为安全兜底，防止死循环。
 */
export async function runJsInIframe(
  code: string,
  options?: RunOptions,
): Promise<RunnerOutput> {
  const timeoutMs = options?.timeoutMs ?? DEFAULT_JS_TIMEOUT_MS

  const iframe = document.createElement('iframe')
  iframe.setAttribute('aria-hidden', 'true')
  // 仅允许脚本执行；不带 allow-same-origin，使其成为唯一源，更安全
  iframe.sandbox.add('allow-scripts')
  iframe.style.cssText = 'width:0;height:0;border:0;position:absolute;left:-9999px;'
  document.body.appendChild(iframe)

  let timer: ReturnType<typeof setTimeout> | undefined
  let done = false
  // 声明在外层，使 cleanup 能在 Promise 外引用并安全移除监听
  let onMessage: ((event: MessageEvent) => void) | undefined

  const cleanup = () => {
    if (onMessage) window.removeEventListener('message', onMessage)
    iframe.remove()
  }

  return new Promise<RunnerOutput>((resolve) => {
    let stdout = ''
    let stderr = ''

    const finish = (result: RunnerOutput) => {
      if (done) return
      done = true
      if (timer) clearTimeout(timer)
      cleanup()
      resolve(result)
    }

    timer = setTimeout(() => {
      finish({
        stdout,
        stderr,
        error: `执行超时（${timeoutMs}ms）`,
        exitCode: 124,
      })
    }, timeoutMs)

    onMessage = (event: MessageEvent) => {
      const data = event.data
      if (!data || typeof data !== 'object' || data.__jsRunner !== true) return
      if (typeof data.type !== 'string' || typeof data.text !== 'string') return

      if (data.type === 'done') {
        finish({
          stdout,
          stderr,
          exitCode: stderr ? 1 : 0,
        })
        return
      }
      if (data.type === 'error') {
        stderr += data.text
      } else {
        // log / info / debug / warn 都计入 stdout（warn 不算错误）
        stdout += data.text
      }
    }

    window.addEventListener('message', onMessage)

    const srcdoc = buildSrcdoc(code)
    iframe.srcdoc = srcdoc
  })
}

/** 构造执行 iframe 的 HTML 文档 */
function buildSrcdoc(code: string): string {
  // console 捕获前导 + 用户代码 + 完成信号后导。
  // 注意 send 的第二个参数必须是类数组（arguments 或真数组），
  // 不能直接传字符串——否则 [].slice.call 会把字符串拆成字符数组。
  const preamble = [
    'function send(type,args){',
    'try{var a=[].slice.call(args);',
    'var text=a.map(function(x){return typeof x==="object"&&x!==null?safe(x):String(x);}).join(" ")+"\\n";',
    'parent.postMessage({__jsRunner:true,type:type,text:text},"*");',
    '}catch(e){}}',
    'function safe(x){try{return JSON.stringify(x)}catch(e){return String(x)}}',
    '["log","info","debug","warn","error"].forEach(function(level){',
    'console[level]=function(){send(level==="debug"?"log":level,arguments);};',
    '});',
    'window.addEventListener("unhandledrejection",function(e){',
    'var r=e&&e.reason;send("error",[r&&r.stack?String(r.stack):String(r)]);',
    '});',
    'window.onerror=function(msg,src,line,col,err){',
    'send("error",[err&&err.stack?String(err.stack):String(msg)]);',
    'parent.postMessage({__jsRunner:true,type:"done"},"*");',
    '};',
  ].join('')

  const postamble = 'parent.postMessage({__jsRunner:true,type:"done"},"*");'

  // 用户代码放入 try/catch，异常计入 stderr 并发 done
  const wrapped = `try{\n${code}\n}catch(e){send("error",[e&&e.stack?e.stack:String(e)]);}\n${postamble}`

  return (
    '<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>' +
    `<script>${preamble}\n${wrapped}</` + 'script></body></html>'
  )
}

export class JsWasmRunner extends WasmRunner {
  readonly languageId = 'javascript'
  readonly displayName = 'JavaScript'

  protected runWasm(code: string, options?: RunOptions): Promise<RunnerOutput> {
    return runJsInIframe(code, options)
  }
}

export const jsWasmRunner = new JsWasmRunner()
