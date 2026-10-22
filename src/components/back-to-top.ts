import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('back-to-top')
export class BackToTop extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    button {
      position: fixed;
      bottom: var(--space-6);
      right: var(--space-6);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: var(--color-navy);
      color: var(--color-gold);
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-base), background var(--transition-fast);
      z-index: 50;
    }

    button.visible {
      opacity: 1;
      visibility: visible;
    }

    button:hover {
      background: var(--color-navy-700);
    }

    button svg {
      width: 22px;
      height: 22px;
    }
  `;

  private onScroll = () => {
    const btn = this.shadowRoot?.querySelector('button');
    if (!btn) return;
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.onScroll);
  }

  private scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    return html`
      <button @click=${this.scrollToTop} aria-label="Back to top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'back-to-top': BackToTop;
  }
}
