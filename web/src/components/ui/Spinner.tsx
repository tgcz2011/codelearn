export interface SpinnerProps {
  size?: number
  className?: string
}

export default function Spinner({ size = 24, className = '' }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="加载中"
      style={{ width: size, height: size }}
      className={`inline-block animate-spin rounded-full border-2 border-slate-300 border-t-slate-600 ${className}`}
    />
  )
}
