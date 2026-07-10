/**
 * 文件存储服务接口
 *
 * 抽象对象存储的上传/下载/删除。业务层只依赖本接口，
 * 不直接调用任何后端 SDK 的存储 API。
 */

export interface StorageService {
  upload(path: string, file: File | Blob): Promise<{ url: string }>
  download(path: string): Promise<Blob>
  delete(path: string): Promise<void>
}
