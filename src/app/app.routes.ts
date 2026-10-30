import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/home/home.component').then((m) => m.HomeComponent),
    title: 'PageTurn — Discover Books'
  },
  {
    path: 'book/:id',
    loadComponent: () =>
      import('./views/book-detail/book-detail.component').then((m) => m.BookDetailComponent),
    title: 'Book Details — PageTurn'
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./views/cart/cart.component').then((m) => m.CartComponent),
    title: 'Shopping Cart — PageTurn'
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./views/checkout/checkout.component').then((m) => m.CheckoutComponent),
    title: 'Checkout — PageTurn'
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./views/wishlist/wishlist.component').then((m) => m.WishlistComponent),
    title: 'My Wishlist — PageTurn'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
