/**
 * Edge Function: run-code
 *
 * 代理 OnlineCompiler.io Sync API，API key 存在服务端 secret 中，前端永远接触不到。
 *
 * 调用方式：POST /functions/v1/run-code
 * Body: { compiler: string, code: string, input?: string }
 * 返回: { output, error, status, exit_code, time, total, memory }
 *
 * 安全：
 * - API key 通过 `supabase secrets set ONLINECOMPILER_API_KEY=xxx` 设置，不存在前端
 * - 仅允许已认证用户调用（验证 Authorization header 中的 JWT）
 * - 限制请求体大小，防止滥用
 */

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const ONLINECOMPILER_API_URL = 'https://api.onlinecompiler.io/api/run-code-sync/'
const MAX_CODE_LENGTH = 100_000 // 100KB 代码上限
const MAX_INPUT_LENGTH = 10_000 // 10KB 输入上限
const REQUEST_TIMEOUT_MS = 30_000

interface RunCodeRequest {
  compiler: string
  code: string
  input?: string
}

/** 允许的 compiler 白名单，防止任意调用 */
const ALLOWED_COMPILERS = new Set([
  'python-3.14',
  'go-1.26',
  'typescript-deno',
  'javascript-node',
  'c-gcc',
  'cpp-gcc',
  'java-jdk',
  'rust-1.87',
  'php-8.4',
  'ruby-3.4',
  'swift-6.2',
  'csharp-dotnet',
])

Deno.serve(async (req: Request) => {
  // CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, content-type',
      },
    })
  }

  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  // 验证用户认证（仅已登录用户可调用）
  const authHeader = req.headers.get('Authorization')
  if (!authHeader) {
    return json({ error: 'Missing authorization header' }, 401)
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    { global: { headers: { Authorization: authHeader } } },
  )

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    return json({ error: 'Unauthorized' }, 401)
  }

  // 解析请求体
  let body: RunCodeRequest
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  if (!body.compiler || !body.code) {
    return json({ error: 'Missing compiler or code field' }, 400)
  }

  if (!ALLOWED_COMPILERS.has(body.compiler)) {
    return json({ error: `Compiler '${body.compiler}' is not allowed` }, 400)
  }

  if (body.code.length > MAX_CODE_LENGTH) {
    return json({ error: `Code too long (max ${MAX_CODE_LENGTH} chars)` }, 400)
  }

  if (body.input && body.input.length > MAX_INPUT_LENGTH) {
    return json({ error: `Input too long (max ${MAX_INPUT_LENGTH} chars)` }, 400)
  }

  // 获取 API key（服务端 secret，前端永远接触不到）
  const apiKey = Deno.env.get('ONLINECOMPILER_API_KEY')
  if (!apiKey) {
    return json({ error: 'OnlineCompiler API key not configured' }, 500)
  }

  // 调用 OnlineCompiler.io API
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const resp = await fetch(ONLINECOMPILER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
      },
      body: JSON.stringify({
        compiler: body.compiler,
        code: body.code,
        input: body.input ?? '',
      }),
      signal: controller.signal,
    })

    if (!resp.ok) {
      const errText = await resp.text().catch(() => 'unknown error')
      return json({ error: `OnlineCompiler API error: ${resp.status} ${errText}` }, 502)
    }

    const data = await resp.json()
    return json(data, 200)
  } catch (e) {
    if (e instanceof DOMException && e.name === 'AbortError') {
      return json({ error: 'Execution timeout' }, 504)
    }
    return json({ error: `OnlineCompiler request failed: ${String(e)}` }, 502)
  } finally {
    clearTimeout(timer)
  }
})

/** 返回 JSON Response */
function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
