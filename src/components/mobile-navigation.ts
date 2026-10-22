import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { navLinks, firmInfo } from '../data/site';
import { getCurrentPath, navigate } from '../router';
import { renderIcon } from './icon';

@customElement('mobile-navigation')
export class MobileNavigation extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      max-width: 380px;
      height: 100vh;
      height: 100dvh;
      background: var(--color-navy);
      z-index: var(--z-mobile-menu);
      transform: translateX(100%);
      transition: transform var(--transition-base);
      overflow-y: auto;
      visibility: hidden;
    }

    :host([open]) {
      transform: translateX(0);
      visibility: visible;
    }

    .mobile-nav {
      padding: var(--space-8) var(--space-6);
      display: flex;
      flex-direction: column;
      min-height: 100%;
      gap: var(--space-2);
    }

    .close-btn {
      position: absolute;
      top: var(--space-4);
      right: var(--space-4);
      background: none;
      border: none;
      color: var(--color-text-inverse);
      padding: var(--space-2);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .close-btn:hover {
      color: var(--color-gold);
    }

    .mobile-link {
      font-family: var(--font-heading);
      font-size: var(--fs-2xl);
      font-weight: 500;
      color: var(--color-text-inverse);
      text-decoration: none;
      padding: var(--space-3) 0;
      border-bottom: 1px solid var(--color-border-navy);
      transition: color var(--transition-fast);
    }

    .mobile-link:hover,
    .mobile-link.active {
      color: var(--color-gold);
    }

    .mobile-cta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      background: var(--color-gold);
      color: var(--color-navy);
      font-weight: 600;
      padding: var(--space-4);
      border: none;
      border-radius: var(--radius-sm);
      text-decoration: none;
      margin-top: var(--space-6);
      transition: background var(--transition-fast);
    }

    .mobile-cta:hover {
      background: var(--color-gold-600);
    }

    .contact-section {
      margin-top: auto;
      padding-top: var(--space-8);
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      color: var(--color-text-inverse-secondary);
      text-decoration: none;
      font-size: var(--fs-sm);
    }

    .contact-item:hover {
      color: var(--color-gold);
    }

    .contact-item svg {
      color: var(--color-gold);
      flex-shrink: 0;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(6, 14, 24, 0.5);
      z-index: calc(var(--z-mobile-menu) - 1);
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-base);
    }

    :host([open]) + .overlay {
      opacity: 1;
      visibility: visible;
    }
  `;

  @state() private currentPath = getCurrentPath();

  private updatePath = () => {
    this.currentPath = getCurrentPath();
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('popstate', this.updatePath);
    window.addEventListener('mobile-menu-close', this.close);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this.updatePath);
    window.removeEventListener('mobile-menu-close', this.close);
  }

  private close = () => {
    this.removeAttribute('open');
    const toggle = document.querySelector('site-header')?.querySelector('.mobile-toggle');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  };

  private handleNavClick(e: Event, path: string) {
    e.preventDefault();
    this.close();
    navigate(path);
  }

  private isActive(path: string): boolean {
    if (path === '/') return this.currentPath === '/';
    return this.currentPath === path || this.currentPath.startsWith(path + '/');
  }

  render() {
    return html`
      <div class="mobile-nav" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button class="close-btn" @click=${this.close} aria-label="Close menu">
          ${renderIcon('close', 28)}
        </button>
        ${navLinks.map(
          (link) => html`
            <a
              class="mobile-link ${this.isActive(link.path) ? 'active' : ''}"
              href=${link.path}
              @click=${(e: Event) => this.handleNavClick(e, link.path)}
            >
              ${link.label}
            </a>
          `,
        )}
        <a
          class="mobile-cta"
          href="/contact"
          @click=${(e: Event) => this.handleNavClick(e, '/contact')}
        >
          Book a Consultation
        </a>
        <div class="contact-section">
          <a class="contact-item" href=${firmInfo.emailHref}>
            ${renderIcon('mail', 18)} ${firmInfo.email}
          </a>
          <a class="contact-item" href=${firmInfo.phoneHref}>
            ${renderIcon('phone', 18)} ${firmInfo.phone}
          </a>
          <span class="contact-item">
            ${renderIcon('map-pin', 18)} Nairobi &middot; Kakamega
          </span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mobile-navigation': MobileNavigation;
  }
}
