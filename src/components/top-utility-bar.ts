import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { firmInfo } from '../data/site';
import { renderIcon } from './icon';

@customElement('top-utility-bar')
export class TopUtilityBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--color-navy);
      color: var(--color-text-inverse);
      font-size: var(--fs-sm);
      border-bottom: 1px solid var(--color-border-navy);
    }

    .utility-bar {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-2) var(--container-padding);
      display: flex;
      align-items: center;
      gap: var(--space-4);
      flex-wrap: wrap;
    }

    .contact-group {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      flex: 1;
      min-width: 0;
    }

    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      color: var(--color-text-inverse-secondary);
      text-decoration: none;
      white-space: nowrap;
      transition: color var(--transition-fast);
    }

    .contact-item:hover {
      color: var(--color-gold);
    }

    .contact-item svg {
      flex-shrink: 0;
      color: var(--color-gold);
    }

    .divider {
      width: 1px;
      height: 14px;
      background: var(--color-border-navy);
      flex-shrink: 0;
    }

    .credential {
      color: var(--color-gold);
      font-weight: 500;
      white-space: nowrap;
      letter-spacing: 0.02em;
    }

    .careers-link {
      color: var(--color-text-inverse-secondary);
      text-decoration: none;
      white-space: nowrap;
      transition: color var(--transition-fast);
    }

    .careers-link:hover {
      color: var(--color-gold);
    }

    @media (max-width: 767px) {
      .utility-bar {
        font-size: var(--fs-xs);
        gap: var(--space-2);
      }

      .contact-group {
        gap: var(--space-2);
      }

      .divider {
        display: none;
      }

      .contact-item .label {
        display: none;
      }

      .credential {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .contact-item--phone {
        display: none;
      }
    }
  `;

  render() {
    return html`
      <div class="utility-bar">
        <div class="contact-group">
          <a class="contact-item" href=${firmInfo.emailHref}>
            ${renderIcon('mail', 14)}
            <span class="label">${firmInfo.email}</span>
          </a>
          <span class="divider"></span>
          <a class="contact-item contact-item--phone" href=${firmInfo.phoneHref}>
            ${renderIcon('phone', 14)}
            <span class="label">${firmInfo.phone}</span>
          </a>
          <span class="divider"></span>
          <span class="contact-item">
            ${renderIcon('map-pin', 14)}
            <span class="label">Nairobi &middot; Kakamega</span>
          </span>
        </div>
        <span class="credential">${firmInfo.credential}</span>
        <a class="careers-link" href="/careers">Careers</a>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'top-utility-bar': TopUtilityBar;
  }
}
