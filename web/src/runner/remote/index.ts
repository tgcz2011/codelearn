/**
 * 远程 Runner 导出。
 *
 * - GoRemoteRunner: 调用 go-runner 后端服务
 * - OnlineCompilerRunner: 调用 OnlineCompiler.io Sync API（通过 Vite dev server proxy）
 *
 * 注册由 `web/src/runner/Registry.ts` 统一完成。
 */

export { GoRemoteRunner, goRemoteRunner } from './GoRemoteRunner'
export { OnlineCompilerRunner, pythonOnlineCompiler, goOnlineCompiler, tsOnlineCompiler, isOnlineCompilerAvailable } from './OnlineCompilerRunner'
