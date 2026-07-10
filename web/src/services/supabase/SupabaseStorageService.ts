/**
 * Supabase 存储服务实现
 *
 * 实现 StorageService 接口，封装 supabase.storage 调用。
 * 默认使用 "codelearn" 存储桶。
 */
import { supabase } from './client'
import type { StorageService } from '../interfaces'

const DEFAULT_BUCKET = 'codelearn'

export class SupabaseStorageService implements StorageService {
  private bucket: string

  constructor(bucket: string = DEFAULT_BUCKET) {
    this.bucket = bucket
  }

  async upload(
    path: string,
    file: File | Blob,
  ): Promise<{ url: string }> {
    const { error } = await supabase.storage
      .from(this.bucket)
      .upload(path, file, { upsert: true })
    if (error) throw error

    const { data } = supabase.storage.from(this.bucket).getPublicUrl(path)
    return { url: data.publicUrl }
  }

  async download(path: string): Promise<Blob> {
    const { data, error } = await supabase.storage
      .from(this.bucket)
      .download(path)
    if (error) throw error
    return data as Blob
  }

  async delete(path: string): Promise<void> {
    const { error } = await supabase.storage.from(this.bucket).remove([path])
    if (error) throw error
  }
}
