/**
 * 支付服务接口占位（SubTask 7.8）
 *
 * 本期不实现真实支付，仅留接口与未实现占位类。
 * 接入真实支付时：实现 PaymentService 接口 → 在容器中替换 NotImplementedPaymentService。
 *
 * 设计参考：支付宝 / 微信支付 / Stripe 等均提供"创建订单 + 查询订单状态"两步流程。
 */

/** 订单状态 */
export type OrderStatus = 'pending' | 'paid' | 'failed'

/** 创建订单入参 */
export interface CreateOrderParams {
  userId: string
  /** 金额，单位为最小货币单位（如分）或元，由实现约定 */
  amount: number
  /** 货币代码，如 CNY / USD */
  currency: string
}

/** 创建订单结果 */
export interface CreateOrderResult {
  orderId: string
  /** 支付跳转 URL（H5 / 扫码场景），由支付渠道返回 */
  payUrl?: string
}

/** 查询订单状态结果 */
export interface OrderStatusResult {
  status: OrderStatus
}

/** 支付服务接口 */
export interface PaymentService {
  /** 创建支付订单，返回订单号与可选的支付跳转链接 */
  createOrder(params: CreateOrderParams): Promise<CreateOrderResult>
  /** 查询订单支付状态 */
  checkOrderStatus(orderId: string): Promise<OrderStatusResult>
}

/**
 * 未实现的支付服务占位。
 * 调用任意方法均抛出明确错误，避免被误用。
 */
export class NotImplementedPaymentService implements PaymentService {
  async createOrder(_params: CreateOrderParams): Promise<CreateOrderResult> {
    throw new Error('PaymentService.createOrder 尚未实现：充值功能即将开放。')
  }

  async checkOrderStatus(_orderId: string): Promise<OrderStatusResult> {
    throw new Error('PaymentService.checkOrderStatus 尚未实现：充值功能即将开放。')
  }
}

/** 支付服务单例（占位）。接入真实支付时替换此实例。 */
export const paymentService: PaymentService =
  new NotImplementedPaymentService()
