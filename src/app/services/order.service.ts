import { Injectable, signal } from '@angular/core';
import { CartItem, Order, PaymentMethodType, ShippingDetails } from '../models/book.model';

const ORDERS_STORAGE_KEY = 'bookstore_orders_history';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly _orders = signal<Order[]>(this.loadOrdersFromStorage());
  private readonly _latestOrder = signal<Order | null>(null);

  public readonly orders = this._orders.asReadonly();
  public readonly latestOrder = this._latestOrder.asReadonly();

  public createOrder(
    shipping: ShippingDetails,
    paymentMethod: PaymentMethodType,
    items: CartItem[],
    subtotal: number,
    discount: number,
    shippingCost: number,
    tax: number,
    total: number,
    appliedPromo?: string
  ): Order {
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const orderNumber = `BK-${new Date().getFullYear()}-${randomSuffix}`;
    const now = new Date();

    const deliveryDays =
      shipping.deliveryMethod === 'overnight' ? 1 : shipping.deliveryMethod === 'express' ? 2 : 4;
    const estDate = new Date(now.getTime() + deliveryDays * 24 * 60 * 60 * 1000);

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      orderDate: now.toISOString(),
      items: [...items],
      shipping,
      paymentMethod,
      subtotal,
      discount,
      shippingCost,
      tax,
      total,
      appliedPromo,
      status: 'Confirmed',
      estimatedDelivery: estDate.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    this._orders.update((list) => [newOrder, ...list]);
    this._latestOrder.set(newOrder);
    this.saveOrdersToStorage();

    return newOrder;
  }

  public getOrderById(id: string): Order | undefined {
    return this._orders().find((o) => o.id === id || o.orderNumber === id);
  }

  private saveOrdersToStorage(): void {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(this._orders()));
    } catch {
      // ignore
    }
  }

  private loadOrdersFromStorage(): Order[] {
    try {
      const data = localStorage.getItem(ORDERS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }
}
