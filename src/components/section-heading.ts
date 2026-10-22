import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('section-heading')
export class SectionHeading extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      margin-bottom: var(--space-12);
    }

    .eyebrow {
      display: inline-block;
      font-size: var(--fs-xs);
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-gold-600);
      margin-bottom: var(--space-3);
    }

    .eyebrow::before,
    .eyebrow::after {
      content: '';
      display: inline-block;
      width: 24px;
      height: 1px;
      background: var(--color-gold);
      vertical-align: middle;
      margin: 0 var(--space-2);
    }

    h2 {
      font-size: var(--fs-4xl);
      color: var(--color-navy);
      margin-bottom: var(--space-4);
    }

    .subtitle {
      color: var(--color-text-secondary);
      font-size: var(--fs-lg);
      max-width: 640px;
      margin: 0 auto;
      line-height: var(--lh-body);
    }

    :host([align='left']) {
      text-align: left;
    }

    :host([align='left']) .subtitle {
      margin: 0;
    }
  `;

  @property() eyebrow = '';
  @property() heading = '';
  @property() subtitle = '';

  render() {
    return html`
      ${this.eyebrow ? html`<span class="eyebrow">${this.eyebrow}</span>` : ''}
      ${this.heading ? html`<h2>${this.heading}</h2>` : ''}
      ${this.subtitle ? html`<p class="subtitle">${this.subtitle}</p>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'section-heading': SectionHeading;
  }
}
