/**
 * 远程 Runner 导出（Task 5 SubTask 5.4）。
 *
 * 目前仅导出 GoRemoteRunner 及其单例。Go 在 Web 端始终走远程服务
 * （桌面端 Task 8 会优先用本机 `go`，本机无 go 时回退到本 RemoteRunner）。
 *
 * 注册由 `web/src/runner/Registry.ts` 统一完成：
 *   register({ languageId: 'go', displayName: 'Go', remote: goRemoteRunner })
 */

export { GoRemoteRunner, goRemoteRunner } from './GoRemoteRunner'
