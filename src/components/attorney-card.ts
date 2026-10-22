import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Attorney } from '../data/attorneys';
import { navigate } from '../router';

@customElement('attorney-card')
export class AttorneyCard extends LitElement {
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
      overflow: hidden;
      text-decoration: none;
      transition: border-color var(--transition-base), box-shadow var(--transition-base);
    }

    .card:hover {
      border-color: var(--color-gold);
      box-shadow: var(--shadow-md);
    }

    .photo {
      width: 100%;
      aspect-ratio: 4 / 5;
      background: var(--color-navy-700);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-gold);
      font-family: var(--font-heading);
      font-size: 3rem;
      font-weight: 600;
    }

    .card-body {
      padding: var(--space-6);
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .attorney-name {
      font-family: var(--font-heading);
      font-size: var(--fs-xl);
      font-weight: 600;
      color: var(--color-navy);
      margin-bottom: var(--space-1);
    }

    .attorney-title {
      font-size: var(--fs-sm);
      color: var(--color-gold-600);
      font-weight: 500;
      margin-bottom: var(--space-4);
    }

    .practice-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
      margin-bottom: var(--space-4);
      flex: 1;
    }

    .tag {
      font-size: var(--fs-xs);
      padding: var(--space-1) var(--space-3);
      background: var(--color-surface-alt);
      border-radius: var(--radius-sm);
      color: var(--color-text-secondary);
    }

    .bio-preview {
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
      line-height: var(--lh-body);
    }

    @media (max-width: 480px) {
      .card-body {
        padding: var(--space-4);
      }
    }
  `;

  @property({ attribute: false }) attorney!: Attorney;

  private handleClick(e: Event) {
    e.preventDefault();
    if (this.attorney) navigate(`/our-team/${this.attorney.slug}`);
  }

  render() {
    if (!this.attorney) return html``;
    const initials = this.attorney.name
      .replace(/[\[\]]/g, '')
      .split(/\s+/)
      .slice(0, 2)
      .map((w) => w.charAt(0))
      .join('');
    return html`
      <a class="card" href="/our-team/${this.attorney.slug}" @click=${this.handleClick}>
        <div class="photo">${initials || 'MM'}</div>
        <div class="card-body">
          <h3 class="attorney-name">${this.attorney.name}</h3>
          <div class="attorney-title">${this.attorney.title}</div>
          <div class="practice-tags">
            ${this.attorney.practiceAreas.map(
              (area) => html`<span class="tag">${area}</span>`,
            )}
          </div>
          <p class="bio-preview">${this.attorney.bio}</p>
        </div>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'attorney-card': AttorneyCard;
  }
}
