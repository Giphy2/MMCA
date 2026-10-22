import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { attorneys } from '../data/attorneys';
import '../components/section-heading';
import '../components/attorney-card';

@customElement('our-team-page')
export class OurTeamPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .page-hero {
      background: var(--color-navy);
      color: var(--color-text-inverse);
      padding: var(--space-20) 0;
    }

    .page-hero-inner {
      max-width: var(--container-narrow);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      text-align: center;
    }

    .page-hero .eyebrow {
      font-size: var(--fs-xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-gold);
      margin-bottom: var(--space-4);
      font-weight: 600;
    }

    .page-hero h1 {
      color: var(--color-text-inverse);
      margin-bottom: var(--space-5);
    }

    .page-hero p {
      color: var(--color-text-inverse-secondary);
      font-size: var(--fs-lg);
      max-width: 600px;
      margin: 0 auto;
    }

    .team-grid {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-24) var(--container-padding);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-6);
    }

    .notice {
      max-width: var(--container-narrow);
      margin: 0 auto;
      padding: 0 var(--container-padding) var(--space-16);
      text-align: center;
      font-size: var(--fs-sm);
      color: var(--color-text-light);
    }

    @media (max-width: 1023px) {
      .team-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .team-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <section class="page-hero">
        <div class="page-hero-inner">
          <div class="eyebrow">Our People</div>
          <h1>Meet our team</h1>
          <p>
            Our advocates bring dedication and legal knowledge to every matter. Profiles
            below will be updated with verified information.
          </p>
        </div>
      </section>
      <div class="team-grid">
        ${attorneys.map((attorney) => html`<attorney-card .attorney=${attorney}></attorney-card>`)}
      </div>
      <div class="notice">
        Team profiles shown here are placeholders. Biographies, qualifications, and
        photographs will be added once verified by the firm.
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'our-team-page': OurTeamPage;
  }
}
