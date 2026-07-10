/**
 * 服务容器与依赖注入
 *
 * 设计要点：
 * 1. 业务层只依赖 `services` 单例与 `./interfaces` 中的接口类型，从不直接 import 任何后端 SDK。
 * 2. 本容器是唯一允许 import 具体后端实现（如 ./supabase）的位置——它负责按 `VITE_DATA_BACKEND`
 *    环境变量装配对应实现并注入到接口字段。
 * 3. 添加新后端（如 Neon）时：实现四个接口 → 在此 switch 内注册 → 通过环境变量切换，业务层零改动。
 */
import { createSupabaseServices } from './supabase'
import type {
  AuthService,
  DataRepository,
  RealtimeService,
  StorageService,
} from './interfaces'

/** 持有全部后端服务实现的容器 */
export interface ServiceContainer {
  repository: DataRepository
  authService: AuthService
  storageService: StorageService
  realtimeService: RealtimeService
}

let _container: ServiceContainer | null = null

/**
 * 初始化（或返回已初始化的）服务容器。
 * 依据 `import.meta.env.VITE_DATA_BACKEND` 选择后端实现，默认 'supabase'。
 * 幂等：重复调用返回同一实例。
 */
export function initServices(): ServiceContainer {
  if (_container) return _container

  const backend = (
    import.meta.env.VITE_DATA_BACKEND ?? 'supabase'
  ).toLowerCase()

  switch (backend) {
    case 'supabase':
      _container = createSupabaseServices()
      break
    default:
      throw new Error(
        `Unsupported VITE_DATA_BACKEND: "${backend}". Supported: "supabase".`,
      )
  }

  return _container
}

/**
 * 服务单例。模块加载时即初始化，业务层直接通过 `services.repository.xxx()` 调用。
 */
export const services: ServiceContainer = initServices()

/**
 * 便捷 Hook：在 React 组件中获取服务容器。
 * 当前为同步访问器；预留为未来接入 Context / Provider 的扩展点。
 */
export function useServices(): ServiceContainer {
  return services
}
