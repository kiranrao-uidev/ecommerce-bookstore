import { Component, input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-cover',
  standalone: true,
  template: `
    <div
      class="book-cover-wrapper"
      [class.size-sm]="size() === 'sm'"
      [class.size-md]="size() === 'md'"
      [class.size-lg]="size() === 'lg'"
      [style.background]="book().coverGradient"
      [style.color]="book().coverTextColor"
    >
      <!-- Spine shadow effect -->
      <div class="book-spine"></div>
      <div class="book-gloss"></div>

      <!-- Book content -->
      <div class="cover-inner">
        <div class="cover-header">
          <span class="category-badge">{{ book().category }}</span>
          @if (book().discountPercent) {
            <span class="discount-pill">-{{ book().discountPercent }}%</span>
          }
        </div>

        <div class="cover-body">
          <h3 class="book-title">{{ book().title }}</h3>
          @if (book().subtitle && size() !== 'sm') {
            <p class="book-subtitle">{{ book().subtitle }}</p>
          }
        </div>

        <div class="cover-footer">
          <span class="author-name">{{ book().author }}</span>
          <span class="format-pill">{{ book().formats[0] }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .book-cover-wrapper {
        position: relative;
        border-radius: 6px 12px 12px 6px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.15),
          inset -2px 0 6px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        user-select: none;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        aspect-ratio: 1 / 1.45;
      }

      .size-sm {
        width: 100px;
        padding: 0.5rem;
      }
      .size-md {
        width: 100%;
        max-width: 260px;
        padding: 1.1rem;
      }
      .size-lg {
        width: 100%;
        max-width: 340px;
        padding: 1.5rem;
      }

      .book-spine {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 14px;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.25) 0%,
          rgba(0, 0, 0, 0.2) 60%,
          rgba(0, 0, 0, 0.4) 100%
        );
        z-index: 2;
      }

      .book-gloss {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          125deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.05) 40%,
          transparent 60%
        );
        pointer-events: none;
        z-index: 1;
      }

      .cover-inner {
        position: relative;
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding-left: 0.5rem;
      }

      .cover-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.4rem;
      }

      .category-badge {
        font-size: 0.65rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-weight: 700;
        opacity: 0.85;
      }

      .discount-pill {
        background: #ef4444;
        color: #ffffff;
        font-size: 0.65rem;
        font-weight: 700;
        padding: 0.15rem 0.4rem;
        border-radius: 9999px;
      }

      .cover-body {
        margin: auto 0;
      }

      .book-title {
        font-family: Georgia, serif;
        font-weight: 700;
        line-height: 1.2;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      }

      .size-sm .book-title {
        font-size: 0.75rem;
      }
      .size-md .book-title {
        font-size: 1.15rem;
      }
      .size-lg .book-title {
        font-size: 1.5rem;
      }

      .book-subtitle {
        font-size: 0.75rem;
        opacity: 0.85;
        margin-top: 0.35rem;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .cover-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.75rem;
        font-weight: 600;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding-top: 0.4rem;
      }

      .author-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 70%;
      }

      .format-pill {
        font-size: 0.65rem;
        background: rgba(255, 255, 255, 0.2);
        padding: 0.1rem 0.35rem;
        border-radius: 4px;
      }
    `
  ]
})
export class BookCoverComponent {
  public readonly book = input.required<Book>();
  public readonly size = input<'sm' | 'md' | 'lg'>('md');
}
