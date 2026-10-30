import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartDrawerComponent } from './components/cart-drawer/cart-drawer.component';
import { ToastContainerComponent } from './components/toast-container/toast-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CartDrawerComponent,
    ToastContainerComponent
  ],
  template: `
    <!-- Global Toast Notifications (fixed, above everything) -->
    <app-toast-container />

    <!-- Sliding Cart Drawer (fixed overlay) -->
    <app-cart-drawer />

    <!-- Site Shell -->
    <div class="app-shell">
      <app-header />

      <main class="app-main" id="main-content" role="main">
        <router-outlet />
      </main>

      <app-footer />
    </div>
  `,
  styles: [
    `
      .app-shell {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .app-main {
        flex: 1;
      }
    `
  ]
})
export class AppComponent {}
