import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { PracticeArea } from '../data/practice-areas';
import { renderIcon } from './icon';
import { navigate } from '../router';

@customElement('service-card')
export class ServiceCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: var(--space-8);
      text-decoration: none;
      transition: border-color var(--transition-base), box-shadow var(--transition-base),
        transform var(--transition-base);
    }

    .card:hover {
      border-color: var(--color-gold);
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }

    .icon-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      border-radius: var(--radius-md);
      background: var(--color-navy);
      color: var(--color-gold);
      margin-bottom: var(--space-5);
    }

    .card:hover .icon-circle {
      background: var(--color-gold);
      color: var(--color-navy);
    }

    .card-title {
      font-family: var(--font-heading);
      font-size: var(--fs-xl);
      font-weight: 600;
      color: var(--color-navy);
      margin-bottom: var(--space-3);
      line-height: var(--lh-heading);
    }

    .card-desc {
      color: var(--color-text-secondary);
      font-size: var(--fs-sm);
      line-height: var(--lh-body);
      flex: 1;
      margin-bottom: var(--space-5);
    }

    .card-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--fs-sm);
      font-weight: 500;
      color: var(--color-gold-600);
    }

    .card:hover .card-link {
      color: var(--color-navy);
    }
  `;

  @property({ attribute: false }) area!: PracticeArea;

  private handleClick(e: Event) {
    e.preventDefault();
    navigate(`/practice-areas/${this.area.slug}`);
  }

  render() {
    if (!this.area) return html``;
    return html`
      <a
        class="card"
        href="/practice-areas/${this.area.slug}"
        @click=${this.handleClick}
      >
        <div class="icon-circle">${renderIcon(this.area.icon, 24)}</div>
        <h3 class="card-title">${this.area.title}</h3>
        <p class="card-desc">${this.area.shortDescription}</p>
        <span class="card-link">Learn more ${renderIcon('arrow-right', 16)}</span>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'service-card': ServiceCard;
  }
}
