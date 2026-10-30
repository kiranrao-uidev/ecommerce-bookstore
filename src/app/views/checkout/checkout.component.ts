import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { NotificationService } from '../../services/notification.service';
import { PaymentMethodType, ShippingDetails } from '../../models/book.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="checkout-page">
      <div class="container">
        <!-- Breadcrumb / Header -->
        <div class="checkout-header">
          <h1 class="page-title">Checkout</h1>
          <div class="secure-badge">
            <span class="lock-icon">🔒</span>
            <span>256-Bit SSL Encrypted Secure Checkout</span>
          </div>
        </div>

        @if (cartItems().length === 0) {
          <div class="empty-state-box">
            <h2>Your cart is currently empty</h2>
            <p>Please add books to your shopping cart before proceeding to checkout.</p>
            <a routerLink="/" class="btn-primary">Return to Catalog</a>
          </div>
        } @else {
          <form (submit)="onPlaceOrder($event)" class="checkout-grid">
            <!-- Left: Form Sections -->
            <div class="forms-column">
              <!-- Step 1: Contact & Shipping Address -->
              <section class="checkout-section">
                <div class="section-header">
                  <div class="step-num">1</div>
                  <h2 class="section-title">Shipping & Contact Information</h2>
                </div>

                <div class="fields-grid-2">
                  <div class="form-field">
                    <label for="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      type="text"
                      [(ngModel)]="shipping.fullName"
                      name="fullName"
                      required
                      placeholder="Jane Doe"
                      class="form-input"
                    />
                  </div>

                  <div class="form-field">
                    <label for="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      [(ngModel)]="shipping.email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      class="form-input"
                    />
                  </div>
                </div>

                <div class="fields-grid-2">
                  <div class="form-field">
                    <label for="phone">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      [(ngModel)]="shipping.phone"
                      name="phone"
                      required
                      placeholder="+1 (555) 019-2834"
                      class="form-input"
                    />
                  </div>

                  <div class="form-field">
                    <label for="country">Country / Region *</label>
                    <select
                      id="country"
                      [(ngModel)]="shipping.country"
                      name="country"
                      class="form-input select"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>

                <div class="form-field">
                  <label for="addressLine1">Street Address *</label>
                  <input
                    id="addressLine1"
                    type="text"
                    [(ngModel)]="shipping.addressLine1"
                    name="addressLine1"
                    required
                    placeholder="123 Library Way, Apt 4B"
                    class="form-input"
                  />
                </div>

                <div class="fields-grid-3">
                  <div class="form-field">
                    <label for="city">City *</label>
                    <input
                      id="city"
                      type="text"
                      [(ngModel)]="shipping.city"
                      name="city"
                      required
                      placeholder="San Francisco"
                      class="form-input"
                    />
                  </div>

                  <div class="form-field">
                    <label for="state">State / Province *</label>
                    <input
                      id="state"
                      type="text"
                      [(ngModel)]="shipping.state"
                      name="state"
                      required
                      placeholder="CA"
                      class="form-input"
                    />
                  </div>

                  <div class="form-field">
                    <label for="postalCode">Postal Code *</label>
                    <input
                      id="postalCode"
                      type="text"
                      [(ngModel)]="shipping.postalCode"
                      name="postalCode"
                      required
                      placeholder="94105"
                      class="form-input"
                    />
                  </div>
                </div>
              </section>

              <!-- Step 2: Shipping Method -->
              <section class="checkout-section">
                <div class="section-header">
                  <div class="step-num">2</div>
                  <h2 class="section-title">Delivery Option</h2>
                </div>

                <div class="delivery-options-stack">
                  <label class="delivery-opt-card" [class.selected]="shipping.deliveryMethod === 'standard'">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="standard"
                      [(ngModel)]="shipping.deliveryMethod"
                    />
                    <div class="opt-text">
                      <span class="opt-name">Standard Delivery (3-5 business days)</span>
                      <span class="opt-sub">{{ subtotal() >= 45 ? 'FREE for orders over $45' : '$4.99' }}</span>
                    </div>
                    <span class="opt-price">{{ subtotal() >= 45 ? 'FREE' : '$4.99' }}</span>
                  </label>

                  <label class="delivery-opt-card" [class.selected]="shipping.deliveryMethod === 'express'">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="express"
                      [(ngModel)]="shipping.deliveryMethod"
                    />
                    <div class="opt-text">
                      <span class="opt-name">Express Priority (2 business days)</span>
                      <span class="opt-sub">Tracked and insured priority parcel</span>
                    </div>
                    <span class="opt-price">$9.99</span>
                  </label>

                  <label class="delivery-opt-card" [class.selected]="shipping.deliveryMethod === 'overnight'">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="overnight"
                      [(ngModel)]="shipping.deliveryMethod"
                    />
                    <div class="opt-text">
                      <span class="opt-name">Next-Day Air Delivery (1 business day)</span>
                      <span class="opt-sub">Guaranteed delivery by 10:30 AM</span>
                    </div>
                    <span class="opt-price">$19.99</span>
                  </label>
                </div>
              </section>

              <!-- Step 3: Payment Method -->
              <section class="checkout-section">
                <div class="section-header">
                  <div class="step-num">3</div>
                  <h2 class="section-title">Payment Method</h2>
                </div>

                <div class="payment-tabs">
                  <button
                    type="button"
                    class="pay-tab"
                    [class.active]="paymentMethod() === 'credit-card'"
                    (click)="paymentMethod.set('credit-card')"
                  >
                    💳 Credit / Debit Card
                  </button>
                  <button
                    type="button"
                    class="pay-tab"
                    [class.active]="paymentMethod() === 'paypal'"
                    (click)="paymentMethod.set('paypal')"
                  >
                    🅿️ PayPal
                  </button>
                  <button
                    type="button"
                    class="pay-tab"
                    [class.active]="paymentMethod() === 'apple-pay'"
                    (click)="paymentMethod.set('apple-pay')"
                  >
                     Apple Pay
                  </button>
                </div>

                @if (paymentMethod() === 'credit-card') {
                  <div class="card-inputs-box">
                    <div class="form-field">
                      <label for="cardNumber">Card Number</label>
                      <input
                        id="cardNumber"
                        type="text"
                        placeholder="•••• •••• •••• 4242"
                        [(ngModel)]="cardNumber"
                        name="cardNumber"
                        class="form-input"
                      />
                    </div>

                    <div class="fields-grid-2">
                      <div class="form-field">
                        <label for="cardExpiry">Expiration (MM/YY)</label>
                        <input
                          id="cardExpiry"
                          type="text"
                          placeholder="12/28"
                          [(ngModel)]="cardExpiry"
                          name="cardExpiry"
                          class="form-input"
                        />
                      </div>

                      <div class="form-field">
                        <label for="cardCvv">Security Code (CVV)</label>
                        <input
                          id="cardCvv"
                          type="password"
                          maxlength="4"
                          placeholder="•••"
                          [(ngModel)]="cardCvv"
                          name="cardCvv"
                          class="form-input"
                        />
                      </div>
                    </div>
                  </div>
                } @else if (paymentMethod() === 'paypal') {
                  <div class="payment-note-box">
                    <p>You will be securely redirected to PayPal to complete your bookstore purchase.</p>
                  </div>
                } @else {
                  <div class="payment-note-box">
                    <p>Authenticate with Face ID or Touch ID using Apple Pay on your device.</p>
                  </div>
                }
              </section>
            </div>

            <!-- Right: Order Review Sidebar -->
            <aside class="sidebar-review-column">
              <div class="review-card">
                <h2 class="review-title">In Your Bag ({{ totalItems() }})</h2>

                <!-- Items list summary -->
                <div class="review-items-stack">
                  @for (item of cartItems(); track item.book.id + item.format) {
                    <div class="mini-item-row">
                      <div class="mini-cover" [style.background]="item.book.coverGradient"></div>
                      <div class="mini-info">
                        <span class="mini-title">{{ item.book.title }}</span>
                        <span class="mini-meta">{{ item.format }} × {{ item.quantity }}</span>
                      </div>
                      <span class="mini-price">\${{ (item.itemPrice * item.quantity) | number: '1.2-2' }}</span>
                    </div>
                  }
                </div>

                <!-- Price summary table -->
                <div class="review-breakdown">
                  <div class="r-row">
                    <span>Subtotal</span>
                    <span>\${{ subtotal() | number: '1.2-2' }}</span>
                  </div>

                  @if (discountAmount() > 0) {
                    <div class="r-row discount">
                      <span>Promo Discount ({{ appliedPromo()?.code }})</span>
                      <span>-\${{ discountAmount() | number: '1.2-2' }}</span>
                    </div>
                  }

                  <div class="r-row">
                    <span>Shipping ({{ shipping.deliveryMethod }})</span>
                    <span>{{ calculateShippingCost() === 0 ? 'FREE' : ('$' + (calculateShippingCost() | number: '1.2-2')) }}</span>
                  </div>

                  <div class="r-row">
                    <span>Estimated Tax (8.25%)</span>
                    <span>\${{ taxAmount() | number: '1.2-2' }}</span>
                  </div>

                  <div class="r-row total">
                    <span>Total Amount</span>
                    <span>\${{ calculateGrandTotal() | number: '1.2-2' }}</span>
                  </div>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="btn-submit-order" [disabled]="submitting()">
                  @if (submitting()) {
                    <span>Processing Order...</span>
                  } @else {
                    <span>Place Order • \${{ calculateGrandTotal() | number: '1.2-2' }}</span>
                  }
                </button>

                <div class="trust-footer">
                  <span>🔒 Guaranteed Safe & Secure Checkout</span>
                </div>
              </div>
            </aside>
          </form>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .checkout-page {
        padding: 2.5rem 0 4rem;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .checkout-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e2e8f0;
      }

      .page-title {
        font-size: 2rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0;
      }

      .secure-badge {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.8rem;
        color: #059669;
        background: #ecfdf5;
        padding: 0.4rem 0.8rem;
        border-radius: 9999px;
        border: 1px solid #a7f3d0;
        font-weight: 600;
      }

      .empty-state-box {
        text-align: center;
        background: #ffffff;
        border: 1px dashed #cbd5e1;
        border-radius: 14px;
        padding: 4rem 1.5rem;
      }

      .checkout-grid {
        display: grid;
        grid-template-columns: 1.4fr 1fr;
        gap: 2.5rem;
        align-items: flex-start;
      }

      .checkout-section {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 1.75rem;
        margin-bottom: 1.75rem;
      }

      .section-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #f1f5f9;
      }

      .step-num {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #4f46e5;
        color: #ffffff;
        font-weight: 800;
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .section-title {
        font-size: 1.15rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0;
      }

      .fields-grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }

      .fields-grid-3 {
        display: grid;
        grid-template-columns: 1.2fr 1fr 1fr;
        gap: 1rem;
      }

      .form-field {
        margin-bottom: 1rem;
      }

      .form-field label {
        display: block;
        font-size: 0.8rem;
        font-weight: 700;
        color: #334155;
        margin-bottom: 0.35rem;
      }

      .form-input {
        width: 100%;
        padding: 0.65rem 0.85rem;
        border-radius: 8px;
        border: 1px solid #cbd5e1;
        font-size: 0.875rem;
        outline: none;
        background: #f8fafc;
        transition: border-color 0.15s ease, background 0.15s ease;
      }

      .form-input:focus {
        background: #ffffff;
        border-color: #4f46e5;
      }

      .form-input.select {
        cursor: pointer;
      }

      .delivery-options-stack {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .delivery-opt-card {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        padding: 0.85rem 1rem;
        border-radius: 10px;
        border: 1.5px solid #e2e8f0;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .delivery-opt-card.selected {
        border-color: #4f46e5;
        background: #eef2ff;
      }

      .opt-text {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .opt-name {
        font-size: 0.875rem;
        font-weight: 700;
        color: #0f172a;
      }

      .opt-sub {
        font-size: 0.75rem;
        color: #64748b;
      }

      .opt-price {
        font-size: 0.9rem;
        font-weight: 800;
        color: #0f172a;
      }

      .payment-tabs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
        margin-bottom: 1.25rem;
      }

      .pay-tab {
        padding: 0.6rem 0.5rem;
        border-radius: 8px;
        border: 1.5px solid #e2e8f0;
        background: #f8fafc;
        font-size: 0.8rem;
        font-weight: 700;
        color: #334155;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .pay-tab.active {
        background: #eef2ff;
        border-color: #4f46e5;
        color: #4338ca;
      }

      .payment-note-box {
        background: #f8fafc;
        border: 1px dashed #cbd5e1;
        padding: 1.25rem;
        border-radius: 8px;
        text-align: center;
        font-size: 0.85rem;
        color: #475569;
      }

      .review-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 1.5rem;
        position: sticky;
        top: 90px;
      }

      .review-title {
        font-size: 1.15rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 1rem 0;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #f1f5f9;
      }

      .review-items-stack {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        max-height: 240px;
        overflow-y: auto;
        margin-bottom: 1.25rem;
        padding-right: 0.25rem;
      }

      .mini-item-row {
        display: flex;
        align-items: center;
        gap: 0.65rem;
      }

      .mini-cover {
        width: 32px;
        height: 44px;
        border-radius: 3px;
        flex-shrink: 0;
      }

      .mini-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .mini-title {
        font-size: 0.825rem;
        font-weight: 600;
        color: #0f172a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .mini-meta {
        font-size: 0.75rem;
        color: #64748b;
      }

      .mini-price {
        font-size: 0.85rem;
        font-weight: 700;
        color: #0f172a;
      }

      .review-breakdown {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border-top: 1px solid #f1f5f9;
        padding-top: 1rem;
        margin-bottom: 1.25rem;
      }

      .r-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.825rem;
        color: #64748b;
      }

      .r-row.discount {
        color: #059669;
        font-weight: 600;
      }

      .r-row.total {
        font-size: 1.15rem;
        font-weight: 800;
        color: #0f172a;
        border-top: 1px solid #e2e8f0;
        padding-top: 0.65rem;
        margin-top: 0.25rem;
      }

      .btn-submit-order {
        width: 100%;
        background: #4f46e5;
        color: #ffffff;
        font-weight: 700;
        font-size: 1rem;
        padding: 0.85rem;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .btn-submit-order:hover:not(:disabled) {
        background: #4338ca;
      }

      .btn-submit-order:disabled {
        background: #94a3b8;
        cursor: not-allowed;
      }

      .trust-footer {
        text-align: center;
        margin-top: 1rem;
        font-size: 0.75rem;
        color: #059669;
        font-weight: 600;
      }

      @media (max-width: 900px) {
        .checkout-grid {
          grid-template-columns: 1fr;
        }
        .fields-grid-2,
        .fields-grid-3 {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class CheckoutComponent {
  private readonly router = inject(Router);
  private readonly cartService = inject(CartService);
  private readonly orderService = inject(OrderService);
  private readonly notificationService = inject(NotificationService);

  public readonly cartItems = this.cartService.cartItems;
  public readonly totalItems = this.cartService.totalItemsCount;
  public readonly subtotal = this.cartService.subtotal;
  public readonly discountAmount = this.cartService.discountAmount;
  public readonly taxAmount = this.cartService.taxAmount;
  public readonly appliedPromo = this.cartService.appliedPromo;

  public readonly paymentMethod = signal<PaymentMethodType>('credit-card');
  public readonly submitting = signal<boolean>(false);

  public shipping: ShippingDetails = {
    fullName: 'Jane Reader',
    email: 'reader@example.com',
    phone: '+1 (555) 234-5678',
    addressLine1: '456 Bookworm Lane',
    city: 'Seattle',
    state: 'WA',
    postalCode: '98101',
    country: 'United States',
    deliveryMethod: 'standard'
  };

  public cardNumber = '•••• •••• •••• 4242';
  public cardExpiry = '08/29';
  public cardCvv = '123';

  public calculateShippingCost(): number {
    if (this.shipping.deliveryMethod === 'overnight') return 19.99;
    if (this.shipping.deliveryMethod === 'express') return 9.99;
    return this.subtotal() >= 45 ? 0 : 4.99;
  }

  public calculateGrandTotal(): number {
    const sub = this.subtotal();
    const discount = this.discountAmount();
    const shippingCost = this.calculateShippingCost();
    const tax = this.taxAmount();
    return Number((sub - discount + shippingCost + tax).toFixed(2));
  }

  public onPlaceOrder(event: Event): void {
    event.preventDefault();

    if (!this.shipping.fullName || !this.shipping.email || !this.shipping.addressLine1) {
      this.notificationService.error('Please fill in all required shipping fields');
      return;
    }

    this.submitting.set(true);

    setTimeout(() => {
      const order = this.orderService.createOrder(
        this.shipping,
        this.paymentMethod(),
        this.cartItems(),
        this.subtotal(),
        this.discountAmount(),
        this.calculateShippingCost(),
        this.taxAmount(),
        this.calculateGrandTotal(),
        this.appliedPromo()?.code
      );

      this.cartService.clearCart();
      this.submitting.set(false);
      this.notificationService.success('Order placed successfully!', 'Order Confirmed');
      this.router.navigate(['/order-confirmation', order.id]);
    }, 800);
  }
}
