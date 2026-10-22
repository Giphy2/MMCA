import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { navLinks, firmInfo } from '../data/site';
import { practiceAreas } from '../data/practice-areas';
import { navigate } from '../router';
import { renderIcon } from './icon';

@customElement('site-footer')
export class SiteFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--color-navy);
      color: var(--color-text-inverse);
      margin-top: var(--space-20);
    }

    .footer-main {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-16) var(--container-padding);
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
      gap: var(--space-10);
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .footer-logo {
      font-family: var(--font-heading);
      font-size: var(--fs-2xl);
      font-weight: 700;
      color: var(--color-text-inverse);
    }

    .footer-logo .gold {
      color: var(--color-gold);
    }

    .footer-credential {
      font-size: var(--fs-xs);
      color: var(--color-gold);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .footer-intro {
      color: var(--color-text-inverse-secondary);
      font-size: var(--fs-sm);
      line-height: var(--lh-body);
      max-width: 300px;
    }

    .footer-col h3 {
      color: var(--color-text-inverse);
      font-family: var(--font-body);
      font-size: var(--fs-sm);
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: var(--space-4);
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .footer-link {
      color: var(--color-text-inverse-secondary);
      text-decoration: none;
      font-size: var(--fs-sm);
      transition: color var(--transition-fast);
    }

    .footer-link:hover {
      color: var(--color-gold);
    }

    .contact-line {
      display: flex;
      align-items: flex-start;
      gap: var(--space-2);
      color: var(--color-text-inverse-secondary);
      font-size: var(--fs-sm);
      margin-bottom: var(--space-3);
      text-decoration: none;
    }

    .contact-line:hover {
      color: var(--color-gold);
    }

    .contact-line svg {
      flex-shrink: 0;
      margin-top: 2px;
      color: var(--color-gold);
    }

    .office-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      margin-bottom: var(--space-3);
    }

    .office-item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-2);
      color: var(--color-text-inverse-secondary);
      font-size: var(--fs-sm);
    }

    .office-item svg {
      flex-shrink: 0;
      margin-top: 2px;
      color: var(--color-gold);
    }

    .footer-bottom {
      border-top: 1px solid var(--color-border-navy);
      padding: var(--space-4) var(--container-padding);
    }

    .footer-bottom-inner {
      max-width: var(--container-max);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--space-4);
      flex-wrap: wrap;
      font-size: var(--fs-xs);
      color: var(--color-text-inverse-secondary);
    }

    .footer-bottom-links {
      display: flex;
      gap: var(--space-4);
    }

    .footer-bottom-links a {
      color: var(--color-text-inverse-secondary);
      font-size: var(--fs-xs);
    }

    .footer-bottom-links a:hover {
      color: var(--color-gold);
    }

    @media (max-width: 1023px) {
      .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: var(--space-8);
        padding: var(--space-12) var(--container-padding);
      }
    }

    @media (max-width: 600px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: var(--space-8);
      }

      .footer-bottom-inner {
        flex-direction: column;
        text-align: center;
      }
    }
  `;

  private handleNavClick(e: Event, path: string) {
    e.preventDefault();
    navigate(path);
  }

  render() {
    const year = new Date().getFullYear();
    return html`
      <footer>
        <div class="footer-main">
          <div class="footer-brand">
            <div class="footer-logo">Mukele<span class="gold"> Moni</span> Law</div>
            <div class="footer-credential">${firmInfo.credential}</div>
            <p class="footer-intro">
              Professional legal services in Nairobi and Kakamega. We are committed to
              providing diligent, client-focused representation across our practice areas.
            </p>
          </div>
          <div class="footer-col">
            <h3>Navigation</h3>
            <div class="footer-links">
              ${navLinks.map(
                (link) => html`
                  <a
                    class="footer-link"
                    href=${link.path}
                    @click=${(e: Event) => this.handleNavClick(e, link.path)}
                    >${link.label}</a
                  >
                `,
              )}
            </div>
          </div>
          <div class="footer-col">
            <h3>Practice Areas</h3>
            <div class="footer-links">
              ${practiceAreas.slice(0, 6).map(
                (area) => html`
                  <a
                    class="footer-link"
                    href="/practice-areas/${area.slug}"
                    @click=${(e: Event) =>
                      this.handleNavClick(e, `/practice-areas/${area.slug}`)}
                    >${area.title}</a
                  >
                `,
              )}
            </div>
          </div>
          <div class="footer-col">
            <h3>Contact</h3>
            <a class="contact-line" href=${firmInfo.emailHref}>
              ${renderIcon('mail', 16)} ${firmInfo.email}
            </a>
            <a class="contact-line" href=${firmInfo.phoneHref}>
              ${renderIcon('phone', 16)} ${firmInfo.phone}
            </a>
            <h3 style="margin-top: var(--space-6)">Offices</h3>
            <div class="office-list">
              ${firmInfo.offices.map(
                (office) => html`
                  <div class="office-item">
                    ${renderIcon('map-pin', 16)}
                    <span>${office.city}, ${office.region}</span>
                  </div>
                `,
              )}
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-inner">
            <span>&copy; ${year} ${firmInfo.name}. All rights reserved.</span>
            <div class="footer-bottom-links">
              <a href="/contact" @click=${(e: Event) => this.handleNavClick(e, '/contact')}
                >Privacy Policy</a
              >
              <a href="/contact" @click=${(e: Event) => this.handleNavClick(e, '/contact')}
                >Terms of Use</a
              >
              <a href="/careers" @click=${(e: Event) => this.handleNavClick(e, '/careers')}
                >Careers</a
              >
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'site-footer': SiteFooter;
  }
}
