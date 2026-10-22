import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { insights, getInsight, type Insight } from '../data/insights';
import { navigate } from '../router';
import { renderIcon } from '../components/icon';

@customElement('insight-detail-page')
export class InsightDetailPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .article {
      max-width: var(--container-narrow);
      margin: 0 auto;
      padding: var(--space-16) var(--container-padding);
    }

    .breadcrumb {
      display: flex;
      gap: var(--space-2);
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
      margin-bottom: var(--space-8);
    }

    .breadcrumb a {
      color: var(--color-text-secondary);
    }

    .breadcrumb a:hover {
      color: var(--color-gold-600);
    }

    .breadcrumb .sep {
      color: var(--color-text-light);
    }

    .article-meta {
      display: flex;
      gap: var(--space-4);
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
      margin-bottom: var(--space-4);
    }

    .article-category {
      color: var(--color-gold-600);
      font-weight: 600;
    }

    .article h1 {
      font-size: var(--fs-4xl);
      color: var(--color-navy);
      margin-bottom: var(--space-5);
      line-height: 1.2;
    }

    .article-summary {
      font-size: var(--fs-lg);
      color: var(--color-text-secondary);
      margin-bottom: var(--space-8);
      line-height: var(--lh-body);
    }

    .article-body p {
      font-size: var(--fs-base);
      color: var(--color-text);
      margin-bottom: var(--space-5);
      line-height: 1.7;
    }

    .demo-notice {
      background: rgba(180, 83, 9, 0.06);
      border: 1px solid rgba(180, 83, 9, 0.2);
      border-radius: var(--radius-sm);
      padding: var(--space-4) var(--space-5);
      font-size: var(--fs-sm);
      color: var(--color-warning);
      margin-bottom: var(--space-8);
    }

    .disclaimer {
      margin-top: var(--space-12);
      padding-top: var(--space-6);
      border-top: 1px solid var(--color-border);
      font-size: var(--fs-sm);
      color: var(--color-text-light);
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      margin-top: var(--space-8);
      color: var(--color-gold-600);
      font-weight: 500;
      font-size: var(--fs-sm);
    }

    .related {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-12) var(--container-padding) var(--space-24);
    }

    .related h2 {
      font-size: var(--fs-2xl);
      color: var(--color-navy);
      margin-bottom: var(--space-8);
    }

    .related-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-6);
    }

    .related-card {
      display: block;
      padding: var(--space-5);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      text-decoration: none;
      transition: border-color var(--transition-base);
    }

    .related-card:hover {
      border-color: var(--color-gold);
    }

    .related-card h3 {
      font-size: var(--fs-base);
      color: var(--color-navy);
      margin-bottom: var(--space-2);
    }

    .related-card .meta {
      font-size: var(--fs-xs);
      color: var(--color-text-secondary);
    }

    .not-found {
      max-width: var(--container-narrow);
      margin: 0 auto;
      padding: var(--space-24) var(--container-padding);
      text-align: center;
    }

    @media (max-width: 767px) {
      .related-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  @property() slug = '';
  @state() private insight: Insight | undefined = getInsight(this.slug);

  updated(changed: Map<string, unknown>) {
    if (changed.has('slug')) {
      this.insight = getInsight(this.slug);
    }
  }

  private go(e: Event, path: string) {
    e.preventDefault();
    navigate(path);
  }

  render() {
    const insight = this.insight;
    if (!insight) {
      return html`
        <div class="not-found">
          <h1>Article not found</h1>
          <p>The article you are looking for does not exist.</p>
          <a href="/insights" @click=${(e: Event) => this.go(e, '/insights')}
            >View all insights</a
          >
        </div>
      `;
    }

    const related = insights.filter((i) => i.slug !== insight.slug).slice(0, 3);

    return html`
      <article class="article">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="/insights" @click=${(e: Event) => this.go(e, '/insights')}>Insights</a>
          <span class="sep">/</span>
          <span>${insight.title}</span>
        </nav>
        <div class="article-meta">
          <span class="article-category">${insight.category}</span>
          <span>
            <time datetime=${insight.dateISO}>${insight.date}</time>
          </span>
        </div>
        <h1>${insight.title}</h1>
        <p class="article-summary">${insight.summary}</p>
        ${insight.isDemo
          ? html`<div class="demo-notice">
              This article is demonstration content and has not been published as a verified
              legal publication.
            </div>`
          : ''}
        <div class="article-body">
          ${insight.body.map((para) => html`<p>${para}</p>`)}
        </div>
        <div class="disclaimer">
          This article is provided for general informational purposes only and does not
          constitute legal advice. Please consult with a qualified advocate regarding your
          specific circumstances.
        </div>
        <a class="back-link" href="/insights" @click=${(e: Event) => this.go(e, '/insights')}>
          ${renderIcon('arrow-right', 16)} Back to all insights
        </a>
      </article>

      <section class="related">
        <h2>Related articles</h2>
        <div class="related-grid">
          ${related.map(
            (rel) => html`
              <a
                class="related-card"
                href="/insights/${rel.slug}"
                @click=${(e: Event) => this.go(e, `/insights/${rel.slug}`)}
              >
                <h3>${rel.title}</h3>
                <div class="meta">
                  <span class="article-category">${rel.category}</span> &middot; ${rel.date}
                </div>
              </a>
            `,
          )}
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'insight-detail-page': InsightDetailPage;
  }
}
