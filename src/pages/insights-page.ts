import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { insights } from '../data/insights';
import { navigate } from '../router';
import '../components/section-heading';

@customElement('insights-page')
export class InsightsPage extends LitElement {
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
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-6);
    }

    .insight-card {
      display: flex;
      flex-direction: column;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: var(--space-6);
      text-decoration: none;
      transition: border-color var(--transition-base), box-shadow var(--transition-base);
    }

    .insight-card:hover {
      border-color: var(--color-gold);
      box-shadow: var(--shadow-md);
    }

    .insight-meta {
      display: flex;
      gap: var(--space-3);
      font-size: var(--fs-xs);
      color: var(--color-text-secondary);
      margin-bottom: var(--space-3);
    }

    .insight-category {
      color: var(--color-gold-600);
      font-weight: 600;
    }

    .insight-card h3 {
      font-size: var(--fs-lg);
      margin-bottom: var(--space-3);
      color: var(--color-navy);
    }

    .insight-card p {
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
      flex: 1;
    }

    .demo-badge {
      display: inline-block;
      font-size: var(--fs-xs);
      background: rgba(180, 83, 9, 0.1);
      color: var(--color-warning);
      padding: 2px var(--space-2);
      border-radius: var(--radius-sm);
      margin-bottom: var(--space-3);
      align-self: flex-start;
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

  private go(e: Event, path: string) {
    e.preventDefault();
    navigate(path);
  }

  render() {
    return html`
      <section class="page-hero">
        <div class="page-hero-inner">
          <div class="eyebrow">Insights</div>
          <h1>Legal commentary & updates</h1>
          <p>
            Articles and perspectives on legal developments in Kenya. Please note that some
            content is for demonstration purposes.
          </p>
        </div>
      </section>
      <div class="grid">
        ${insights.map(
          (insight) => html`
            <a
              class="insight-card"
              href="/insights/${insight.slug}"
              @click=${(e: Event) => this.go(e, `/insights/${insight.slug}`)}
            >
              ${insight.isDemo ? html`<span class="demo-badge">Demonstration content</span>` : ''}
              <div class="insight-meta">
                <span class="insight-category">${insight.category}</span>
                <span>${insight.date}</span>
              </div>
              <h3>${insight.title}</h3>
              <p>${insight.summary}</p>
            </a>
          `,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'insights-page': InsightsPage;
  }
}
