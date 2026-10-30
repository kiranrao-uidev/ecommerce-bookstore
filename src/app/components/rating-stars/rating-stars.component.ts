import { Component, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-rating-stars',
  standalone: true,
  imports: [DecimalPipe],
  template: `
    <div class="rating-container" [class.interactive]="interactive()">
      <div class="stars-row">
        @for (star of [1, 2, 3, 4, 5]; track star) {
          <button
            type="button"
            class="star-btn"
            [disabled]="!interactive()"
            (click)="onStarClick(star)"
            (mouseenter)="onHover(star)"
            (mouseleave)="onHoverLeave()"
            [attr.aria-label]="'Rate ' + star + ' stars'"
          >
            <svg
              class="star-icon"
              [class.filled]="isFilled(star)"
              [class.half]="isHalf(star)"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </button>
        }
      </div>

      @if (showScore()) {
        <span class="rating-score">{{ rating() | number: '1.1-1' }}</span>
      }
      @if (reviewCount() !== undefined) {
        <span class="review-count">({{ reviewCount() }})</span>
      }
    </div>
  `,
  styles: [
    `
      .rating-container {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
      }
      .stars-row {
        display: flex;
        align-items: center;
        gap: 1px;
      }
      .star-btn {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        cursor: default;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #d1d5db;
        transition: transform 0.15s ease, color 0.15s ease;
      }
      .interactive .star-btn {
        cursor: pointer;
      }
      .interactive .star-btn:hover {
        transform: scale(1.15);
      }
      .star-icon {
        width: 1rem;
        height: 1rem;
        transition: fill 0.15s ease, color 0.15s ease;
      }
      .star-icon.filled {
        fill: #f59e0b;
        color: #f59e0b;
      }
      .star-icon.half {
        fill: url(#half-grad);
        color: #f59e0b;
      }
      .rating-score {
        font-size: 0.825rem;
        font-weight: 600;
        color: #1f2937;
      }
      .review-count {
        font-size: 0.775rem;
        color: #6b7280;
      }
    `
  ]
})
export class RatingStarsComponent {
  public readonly rating = input<number>(0);
  public readonly reviewCount = input<number | undefined>(undefined);
  public readonly showScore = input<boolean>(true);
  public readonly interactive = input<boolean>(false);
  public readonly ratingChange = output<number>();

  public hoveredStar: number | null = null;

  public isFilled(starIndex: number): boolean {
    const current = this.hoveredStar ?? this.rating();
    return current >= starIndex;
  }

  public isHalf(starIndex: number): boolean {
    const current = this.hoveredStar ?? this.rating();
    return current >= starIndex - 0.5 && current < starIndex;
  }

  public onHover(star: number): void {
    if (this.interactive()) {
      this.hoveredStar = star;
    }
  }

  public onHoverLeave(): void {
    if (this.interactive()) {
      this.hoveredStar = null;
    }
  }

  public onStarClick(star: number): void {
    if (this.interactive()) {
      this.ratingChange.emit(star);
    }
  }
}
