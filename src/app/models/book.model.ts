export type BookCategory =
  | 'All'
  | 'Technology & AI'
  | 'Science Fiction'
  | 'Fiction & Literature'
  | 'Business & Leadership'
  | 'Psychology & Mind'
  | 'Mystery & Thriller'
  | 'Fantasy';

export type BookFormat = 'Hardcover' | 'Paperback' | 'eBook' | 'Audiobook';

export interface BookReview {
  id: string;
  bookId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: BookCategory;
  coverGradient: string;
  coverTextColor: string;
  coverPattern?: string;
  description: string;
  shortDescription: string;
  isbn: string;
  pages: number;
  publishedDate: string;
  publisher: string;
  language: string;
  inStock: boolean;
  stockCount: number;
  formats: BookFormat[];
  tags: string[];
  featured?: boolean;
  bestseller?: boolean;
  newRelease?: boolean;
  discountPercent?: number;
}

export interface CartItem {
  book: Book;
  quantity: number;
  format: BookFormat;
  itemPrice: number;
}

export interface PromoCode {
  code: string;
  discountPercent: number;
  minSpend: number;
  description: string;
}

export interface ShippingDetails {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  deliveryMethod: 'standard' | 'express' | 'overnight';
}

export type PaymentMethodType = 'credit-card' | 'paypal' | 'apple-pay';

export interface PaymentDetails {
  method: PaymentMethodType;
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  orderDate: string;
  items: CartItem[];
  shipping: ShippingDetails;
  paymentMethod: PaymentMethodType;
  subtotal: number;
  discount: number;
  shippingCost: number;
  tax: number;
  total: number;
  appliedPromo?: string;
  status: 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered';
  estimatedDelivery: string;
}

export interface BookFilterState {
  searchQuery: string;
  category: BookCategory;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  format?: BookFormat | 'All';
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest' | 'title';
  inStockOnly: boolean;
}
