import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  title?: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly _toasts = signal<ToastMessage[]>([]);
  public readonly toasts = this._toasts.asReadonly();

  public show(
    message: string,
    type: 'success' | 'info' | 'warning' | 'error' = 'info',
    title?: string,
    duration = 3500
  ): void {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const toast: ToastMessage = { id, type, message, title, duration };

    this._toasts.update((current) => [...current, toast]);

    if (duration > 0) {
      setTimeout(() => {
        this.dismiss(id);
      }, duration);
    }
  }

  public success(message: string, title = 'Success'): void {
    this.show(message, 'success', title);
  }

  public info(message: string, title = 'Info'): void {
    this.show(message, 'info', title);
  }

  public warning(message: string, title = 'Notice'): void {
    this.show(message, 'warning', title);
  }

  public error(message: string, title = 'Error'): void {
    this.show(message, 'error', title);
  }

  public dismiss(id: string): void {
    this._toasts.update((current) => current.filter((t) => t.id !== id));
  }
}
