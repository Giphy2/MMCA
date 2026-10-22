import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { practiceAreas } from '../data/practice-areas';
import '../components/section-heading';
import '../components/service-card';

@customElement('practice-areas-page')
export class PracticeAreasPage extends LitElement {
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

    .grid {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-24) var(--container-padding);
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-6);
    }

    @media (max-width: 1023px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <section class="page-hero">
        <div class="page-hero-inner">
          <div class="eyebrow">Our Services</div>
          <h1>Practice Areas</h1>
          <p>
            We offer a range of legal services to individuals and businesses across Kenya.
            Explore our areas of expertise below.
          </p>
        </div>
      </section>
      <div class="grid">
        ${practiceAreas.map((area) => html`<service-card .area=${area}></service-card>`)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'practice-areas-page': PracticeAreasPage;
  }
}
