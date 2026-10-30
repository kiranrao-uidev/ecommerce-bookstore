import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <footer class="site-footer">
      <!-- Newsletter subscription strip -->
      <div class="newsletter-section">
        <div class="footer-container newsletter-flex">
          <div class="newsletter-text">
            <h3 class="newsletter-title">Join our Reader's Circle</h3>
            <p class="newsletter-desc">Subscribe to get author interviews, exclusive discounts, and weekly curated book picks.</p>
          </div>

          <div class="newsletter-form">
            @if (subscribed()) {
              <div class="subscribed-alert">
                <span>🎉 Thank you! Check your inbox for your 10% welcome coupon.</span>
              </div>
            } @else {
              <form (submit)="onSubscribe($event)" class="email-input-group">
                <input
                  type="email"
                  class="newsletter-input"
                  placeholder="Enter your email address..."
                  [(ngModel)]="email"
                  name="subscriberEmail"
                  required
                />
                <button type="submit" class="newsletter-btn">Subscribe</button>
              </form>
            }
          </div>
        </div>
      </div>

      <!-- Main footer links -->
      <div class="footer-main">
        <div class="footer-container footer-grid">
          <!-- Column 1: Brand Info -->
          <div class="footer-col brand-col">
            <div class="footer-brand">
              <div class="brand-badge">AuraBooks</div>
              <p class="brand-desc">
                Your premier modern destination for bestsellers, technology masterclasses, timeless literature, and thought-provoking science fiction.
              </p>
            </div>
            <div class="security-guarantee">
              <span class="lock-icon">🔒</span>
              <span>256-Bit SSL Encrypted & PCI Compliant Checkout</span>
            </div>
          </div>

          <!-- Column 2: Popular Genres -->
          <div class="footer-col">
            <h4 class="col-title">Popular Genres</h4>
            <ul class="footer-links">
              <li><span>Technology & AI</span></li>
              <li><span>Science Fiction & Space</span></li>
              <li><span>Psychology & Mindset</span></li>
              <li><span>Business & Strategy</span></li>
              <li><span>Fantasy & Epic Lore</span></li>
              <li><span>Mystery & Crime Fiction</span></li>
            </ul>
          </div>

          <!-- Column 3: Customer Care -->
          <div class="footer-col">
            <h4 class="col-title">Customer Care</h4>
            <ul class="footer-links">
              <li><span>Track Order Status</span></li>
              <li><span>Shipping & Free Returns (30-Days)</span></li>
              <li><span>eBook & Audiobook Support</span></li>
              <li><span>Gift Cards & Promotions</span></li>
              <li><span>Help Center & FAQ</span></li>
            </ul>
          </div>

          <!-- Column 4: Promo Codes -->
          <div class="footer-col">
            <h4 class="col-title">Active Discounts</h4>
            <div class="promo-tips">
              <div class="promo-chip">
                <code>BOOKWORM15</code>
                <span>15% off orders $25+</span>
              </div>
              <div class="promo-chip">
                <code>READMORE20</code>
                <span>20% off orders $50+</span>
              </div>
              <div class="promo-chip">
                <code>WELCOME10</code>
                <span>10% off any order</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright bottom -->
      <div class="footer-bottom">
        <div class="footer-container bottom-flex">
          <p>© {{ currentYear }} AuraBooks Inc. All rights reserved. Angular 21 Enterprise Bookstore.</p>
          <div class="payment-methods">
            <span class="pay-tag">Visa</span>
            <span class="pay-tag">Mastercard</span>
            <span class="pay-tag">Apple Pay</span>
            <span class="pay-tag">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .site-footer {
        background: #0f172a;
        color: #cbd5e1;
        margin-top: 4rem;
        border-top: 1px solid #1e293b;
      }

      .footer-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      .newsletter-section {
        background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 2.5rem 0;
      }

      .newsletter-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
      }

      .newsletter-title {
        color: #ffffff;
        font-size: 1.35rem;
        font-weight: 700;
        margin: 0 0 0.35rem 0;
      }

      .newsletter-desc {
        color: #cbd5e1;
        font-size: 0.875rem;
        margin: 0;
      }

      .newsletter-form {
        flex: 1;
        max-width: 480px;
      }

      .email-input-group {
        display: flex;
        gap: 0.5rem;
      }

      .newsletter-input {
        flex: 1;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        font-size: 0.875rem;
        outline: none;
      }

      .newsletter-input:focus {
        border-color: #818cf8;
        background: rgba(255, 255, 255, 0.15);
      }

      .newsletter-input::placeholder {
        color: #94a3b8;
      }

      .newsletter-btn {
        background: #4f46e5;
        color: #ffffff;
        border: none;
        padding: 0.75rem 1.4rem;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .newsletter-btn:hover {
        background: #4338ca;
      }

      .subscribed-alert {
        background: rgba(16, 185, 129, 0.2);
        border: 1px solid #10b981;
        color: #6ee7b7;
        padding: 0.65rem 1rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-weight: 500;
      }

      .footer-main {
        padding: 3.5rem 0 2.5rem;
      }

      .footer-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
        gap: 2.5rem;
      }

      .brand-badge {
        font-size: 1.25rem;
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 0.75rem;
      }

      .brand-desc {
        font-size: 0.85rem;
        line-height: 1.6;
        color: #94a3b8;
        margin-bottom: 1.25rem;
      }

      .security-guarantee {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.75rem;
        color: #10b981;
        background: rgba(16, 185, 129, 0.1);
        padding: 0.5rem 0.75rem;
        border-radius: 6px;
        border: 1px solid rgba(16, 185, 129, 0.2);
      }

      .col-title {
        color: #ffffff;
        font-size: 0.95rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .footer-links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }

      .footer-links li span {
        font-size: 0.825rem;
        color: #94a3b8;
        cursor: pointer;
        transition: color 0.15s ease;
      }

      .footer-links li span:hover {
        color: #818cf8;
      }

      .promo-tips {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .promo-chip {
        background: #1e293b;
        padding: 0.45rem 0.75rem;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.75rem;
        border: 1px solid #334155;
      }

      .promo-chip code {
        color: #fbbf24;
        font-weight: 700;
      }

      .footer-bottom {
        border-top: 1px solid #1e293b;
        padding: 1.25rem 0;
        font-size: 0.775rem;
        color: #64748b;
      }

      .bottom-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .payment-methods {
        display: flex;
        gap: 0.4rem;
      }

      .pay-tag {
        background: #1e293b;
        color: #94a3b8;
        font-size: 0.7rem;
        font-weight: 600;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        border: 1px solid #334155;
      }

      @media (max-width: 900px) {
        .footer-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (max-width: 600px) {
        .footer-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class FooterComponent {
  public email = '';
  public readonly subscribed = signal<boolean>(false);
  public readonly currentYear = new Date().getFullYear();

  public onSubscribe(event: Event): void {
    event.preventDefault();
    if (this.email.trim()) {
      this.subscribed.set(true);
      this.email = '';
    }
  }
}
