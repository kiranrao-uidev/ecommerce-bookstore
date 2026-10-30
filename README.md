PageTurn / AuraBooks — Angular E-Commerce Bookstore
🏗️ What's Built
A fully functional Angular 21 standalone-component e-commerce bookstore with 5 pages, 8 reusable components, 5 services, and localStorage-backed persistence.
________________________________________
Pages & What a User Can Do
1. 🏠 Home Page (/)
Hero Banner
	A full-width banner highlights the featured book of the moment (the first featured: true book)
	A "Shop Now" button scrolls the user down to the book catalogue
Category Navigation Bar
	Horizontal scrollable category pills: All, Technology & AI, Science Fiction, Fiction & Literature, Business & Leadership, Psychology & Mind, Mystery & Thriller, Fantasy
	Each shows a live count of books in that category
	Clicking a pill instantly filters the grid
Advanced Filter Sidebar / Controls
	Search bar — live text search across title, author, subtitle, tags, and ISBN
	Price range slider — drag to filter by max price (up to $100)
	Minimum rating filter — click 1–5 star buttons to set a floor rating
	In Stock Only toggle — checkbox to hide unavailable books
	Sort dropdown — sort by: Featured, Price Low→High, Price High→Low, Rating, Newest, Title A–Z
	Reset Filters button — clears all filters back to defaults
Book Grid
	Responsive grid of BookCard components
	Each card shows: gradient cover art, title, author, star rating, review count, price
	Bestseller (amber) and New (green) floating badges
	Format selector chips on each card (Hardcover / Paperback / eBook / Audiobook) — price updates live per format
	Wishlist heart button — toggle save/unsave with a red heart animation
	Quick View button — appears on hover over the cover; opens a modal without leaving the page
Quick View Modal
	Appears as a centred overlay with a blurred backdrop
	Shows: cover art, title, subtitle, author, rating, stock count, short description
	Format selector with per-format prices shown on each button
	Quantity picker (+ / −)
	Add to Cart button — shows the total price for quantity × format selected
	Wishlist icon button
	Link to the full Book Detail page
	Close via ✕ button, clicking the backdrop, or pressing Escape
________________________________________
2. 📖 Book Detail Page (/book/:id)
Full-page view of a single book with three tabbed sections:
Overview Tab
	Full description text
	Tags (clickable — filters the home page by that category)
	Badges (Bestseller / New Release / discount %)
Specifications Tab
	ISBN, Page count, Publisher, Published Date, Language
	Available formats listed
Reviews Tab
	Lists all existing customer reviews with star rating, verified-purchase badge, and date
	Write a Review form — enter your name, click stars to set a rating (1–5), write a comment, submit to add a live review (updates the book's average rating in real time)
Shared across all tabs:
	Format selector — switches between available formats with live price update
	Quantity picker (+ / −)
	Add to Cart button
	Wishlist heart toggle
	Related Books row — shows up to 4 books from the same category or with matching tags, each with a direct Add to Cart action
________________________________________
3. 🛒 Cart Page (/cart)
Full shopping cart management page:
	Lists all cart items with cover, title, author, format, and unit price
	Quantity controls (+ / −) per item — updates totals in real time
	Remove item button per line
	Clear Cart button to empty everything
	Promo Code input — enter one of three codes:
	BOOKWORM15 → 15% off orders $25+
	READMORE20 → 20% off orders $50+
	WELCOME10 → 10% off any order
	Applied promo shows the discount line and a Remove promo button
	Order summary panel — shows Subtotal, Discount, Shipping (free over 45,otherwise4.99), Tax (8.25%), and Grand Total
	Proceed to Checkout button
________________________________________
4. 💳 Checkout Page (/checkout)
A two-column order confirmation/payment page:
Left: Order Review
	Full list of items being purchased (cover, title, format, quantity, price)
Left: Shipping Details (pre-filled demo data)
	Full name, email, phone, address, city, state, postal code, country
	Delivery method selector: Standard (4 days) / Express (2 days) / Overnight (1 day) — each shows its cost
Right: Payment Method
	Toggle between three payment methods: Credit/Debit Card, PayPal, Apple Pay
	Card form shows card number (masked), expiry, CVV
Right: Order Summary
	Subtotal, Promo Discount, Shipping, Tax, Grand Total
	Security badges (SSL, PCI Compliant)
Place Order button — simulates order submission with a loading state, then generates an order number (e.g. BK-2026-482910) and navigates back to home with a success toast
________________________________________
5. ❤️ Wishlist Page (/wishlist)
	Grid of all wishlisted books with cover, title, author, star rating, and price
	Move to Cart button — adds the book to cart (Paperback) and removes from wishlist
	Remove button — removes from wishlist only
	Clear Wishlist button (top-right, only shown when non-empty)
	Empty state with a link back to browse books
________________________________________
🔧 Persistent Global Features
Header (every page)
	Logo — links back to home
	Category nav with active highlight
	Live search bar — shows autocomplete suggestions as you type; click a suggestion to jump to that book's detail page; press Enter or click the search icon to filter the home catalogue
	Wishlist icon with live count badge
	Cart icon with live item count and subtotal — clicking opens the Cart Drawer
Cart Drawer (slides in from the right, every page)
	A slide-out panel available from any page without navigation
	Shows all cart items with + / − quantity and remove controls
	Promo code input
	Order summary (subtotal, discount, shipping, total)
	View Full Cart and Proceed to Checkout buttons
	Close via ✕ button or pressing Escape
Toast Notifications (every page)
	Non-blocking slide-in toasts for every user action: adding to cart, wishlisting, applying promos, removing items — colour-coded green (success), blue (info), amber (warning), red (error)
Footer (every page)
	Newsletter subscription — enter email, subscribe; shows a success confirmation with a "10% welcome coupon" message
	Active promo codes displayed for convenience (BOOKWORM15, READMORE20, WELCOME10)
	Genre links, customer care links, payment method badges (Visa, Mastercard, Apple Pay, PayPal)
________________________________________
💾 Data Persistence
All user data survives a page refresh via localStorage:
Key	What's saved
bookstore_cart_items	Full cart contents + formats + quantities
bookstore_promo_code	Currently applied promo
bookstore_wishlist_ids	Wishlist book IDs
bookstore_orders_history	All past order records
________________________________________
📚 Book Catalogue (12 books)
Covers 7 genres with real-world titles including Designing Data-Intensive Applications, Project Hail Mary, Atomic Habits, The Psychology of Money, Dune: Deluxe Edition, The Name of the Wind, The Silent Patient, and more — each with its own gradient cover art, pricing, formats, tags, and review data.

