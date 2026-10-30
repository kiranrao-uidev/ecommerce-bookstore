import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, ToastMessage } from '../../services/notification.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-stack" aria-live="polite">
      @for (toast of toasts(); track toast.id) {
        <div class="toast-card" [class]="'type-' + toast.type">
          <div class="toast-icon-wrap">
            @switch (toast.type) {
              @case ('success') {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              @case ('error') {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              }
              @case ('warning') {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              }
              @default {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              }
            }
          </div>

          <div class="toast-content">
            @if (toast.title) {
              <div class="toast-title">{{ toast.title }}</div>
            }
            <div class="toast-message">{{ toast.message }}</div>
          </div>

          <button
            type="button"
            class="toast-close"
            (click)="dismiss(toast.id)"
            aria-label="Dismiss toast"
          >
            ×
          </button>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .toast-stack {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        z-index: 9999;
        pointer-events: none;
        max-width: 380px;
        width: 100%;
      }

      .toast-card {
        pointer-events: auto;
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        padding: 0.85rem 1rem;
        border-radius: 10px;
        background: #ffffff;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        border: 1px solid #e2e8f0;
        animation: slideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      }

      @keyframes slideIn {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .toast-icon-wrap {
        width: 22px;
        height: 22px;
        flex-shrink: 0;
        margin-top: 1px;
      }

      .toast-icon-wrap svg {
        width: 100%;
        height: 100%;
      }

      .type-success {
        border-left: 4px solid #10b981;
      }
      .type-success .toast-icon-wrap {
        color: #10b981;
      }

      .type-error {
        border-left: 4px solid #ef4444;
      }
      .type-error .toast-icon-wrap {
        color: #ef4444;
      }

      .type-warning {
        border-left: 4px solid #f59e0b;
      }
      .type-warning .toast-icon-wrap {
        color: #f59e0b;
      }

      .type-info {
        border-left: 4px solid #3b82f6;
      }
      .type-info .toast-icon-wrap {
        color: #3b82f6;
      }

      .toast-content {
        flex: 1;
      }

      .toast-title {
        font-size: 0.825rem;
        font-weight: 700;
        color: #0f172a;
        margin-bottom: 0.15rem;
      }

      .toast-message {
        font-size: 0.8rem;
        color: #475569;
        line-height: 1.4;
      }

      .toast-close {
        background: none;
        border: none;
        font-size: 1.25rem;
        line-height: 1;
        color: #94a3b8;
        cursor: pointer;
        padding: 0;
      }

      .toast-close:hover {
        color: #0f172a;
      }
    `
  ]
})
export class ToastContainerComponent {
  private readonly notificationService = inject(NotificationService);
  public readonly toasts = this.notificationService.toasts;

  public dismiss(id: string): void {
    this.notificationService.dismiss(id);
  }
}
