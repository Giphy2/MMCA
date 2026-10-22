import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { navLinks, firmInfo } from '../data/site';
import { getCurrentPath, navigate } from '../router';
import { renderIcon } from './icon';

@customElement('site-header')
export class SiteHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--color-surface);
      border-bottom: 1px solid var(--color-border);
      position: sticky;
      top: 0;
      z-index: var(--z-header);
    }

    .header-inner {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-4) var(--container-padding);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-6);
    }

    .logo {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      flex-shrink: 0;
    }

    .logo-mark {
      font-family: var(--font-heading);
      font-size: var(--fs-2xl);
      font-weight: 700;
      color: var(--color-navy);
      letter-spacing: -0.01em;
      line-height: 1;
    }

    .logo-mark .gold {
      color: var(--color-gold);
    }

    .logo-sub {
      font-size: var(--fs-xs);
      color: var(--color-text-secondary);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 2px;
    }

    nav {
      display: flex;
      align-items: center;
      gap: var(--space-1);
    }

    .nav-link {
      font-size: var(--fs-sm);
      font-weight: 500;
      color: var(--color-text);
      text-decoration: none;
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-sm);
      transition: color var(--transition-fast), background var(--transition-fast);
      position: relative;
    }

    .nav-link:hover {
      color: var(--color-gold-600);
    }

    .nav-link.active {
      color: var(--color-navy);
      font-weight: 600;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: var(--space-3);
      right: var(--space-3);
      height: 2px;
      background: var(--color-gold);
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: var(--color-navy);
      color: var(--color-text-inverse);
      font-size: var(--fs-sm);
      font-weight: 500;
      padding: var(--space-3) var(--space-5);
      border: 1px solid var(--color-navy);
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: background var(--transition-fast), border-color var(--transition-fast);
      white-space: nowrap;
      margin-left: var(--space-4);
    }

    .cta-button:hover {
      background: var(--color-navy-700);
      color: var(--color-gold);
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      color: var(--color-navy);
      padding: var(--space-2);
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 1023px) {
      nav {
        display: none;
      }

      .cta-button {
        display: none;
      }

      .mobile-toggle {
        display: flex;
      }
    }
  `;

  @state() private currentPath = getCurrentPath();

  private updatePath() {
    this.currentPath = getCurrentPath();
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('popstate', this.updatePath);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this.updatePath);
  }

  private handleNavClick(e: Event, path: string) {
    e.preventDefault();
    navigate(path);
  }

  private toggleMobileMenu() {
    this.dispatchEvent(
      new CustomEvent('mobile-menu-toggle', { bubbles: true, composed: true }),
    );
  }

  private isActive(path: string): boolean {
    if (path === '/') return this.currentPath === '/';
    return this.currentPath === path || this.currentPath.startsWith(path + '/');
  }

  render() {
    return html`
      <div class="header-inner">
        <a class="logo" href="/" @click=${(e: Event) => this.handleNavClick(e, '/')}>
          <span class="logo-mark">Mukele<span class="gold"> Moni</span> Law</span>
          <span class="logo-sub">${firmInfo.credential}</span>
        </a>
        <nav aria-label="Primary navigation">
          ${navLinks.map(
            (link) => html`
              <a
                class="nav-link ${this.isActive(link.path) ? 'active' : ''}"
                href=${link.path}
                @click=${(e: Event) => this.handleNavClick(e, link.path)}
                aria-current=${this.isActive(link.path) ? 'page' : 'false'}
              >
                ${link.label}
              </a>
            `,
          )}
          <a
            class="cta-button"
            href="/contact"
            @click=${(e: Event) => this.handleNavClick(e, '/contact')}
          >
            Book a Consultation
          </a>
        </nav>
        <button
          class="mobile-toggle"
          @click=${this.toggleMobileMenu}
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobile-navigation"
        >
          ${renderIcon('menu', 28)}
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'site-header': SiteHeader;
  }
}
