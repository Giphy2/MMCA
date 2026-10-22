import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { practiceAreas, getPracticeArea } from '../data/practice-areas';
import { navigate } from '../router';
import '../components/section-heading';
import { renderIcon } from '../components/icon';

@customElement('practice-area-detail-page')
export class PracticeAreaDetailPage extends LitElement {
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
    }

    .breadcrumb {
      display: flex;
      gap: var(--space-2);
      font-size: var(--fs-sm);
      color: var(--color-text-inverse-secondary);
      margin-bottom: var(--space-6);
    }

    .breadcrumb a {
      color: var(--color-text-inverse-secondary);
    }

    .breadcrumb a:hover {
      color: var(--color-gold);
    }

    .breadcrumb .sep {
      color: var(--color-text-light);
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

    .page-hero .lead {
      color: var(--color-text-inverse-secondary);
      font-size: var(--fs-lg);
      max-width: 640px;
    }

    .body {
      max-width: var(--container-narrow);
      margin: 0 auto;
      padding: var(--space-16) var(--container-padding);
    }

    .body h2 {
      font-size: var(--fs-2xl);
      color: var(--color-navy);
      margin-bottom: var(--space-5);
      margin-top: var(--space-12);
    }

    .body h2:first-child {
      margin-top: 0;
    }

    .body p {
      color: var(--color-text-secondary);
      margin-bottom: var(--space-4);
    }

    .scope-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3) var(--space-6);
      margin-bottom: var(--space-4);
      list-style: none;
      padding: 0;
    }

    .scope-list li {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      font-size: var(--fs-sm);
      color: var(--color-text);
    }

    .scope-list li svg {
      color: var(--color-gold-600);
      flex-shrink: 0;
      margin-top: 3px;
    }

    .faqs {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .faq-item {
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: var(--space-5) var(--space-6);
      background: var(--color-surface);
    }

    .faq-item h3 {
      font-family: var(--font-body);
      font-size: var(--fs-base);
      font-weight: 600;
      color: var(--color-navy);
      margin-bottom: var(--space-3);
    }

    .faq-item p {
      font-size: var(--fs-sm);
      margin: 0;
    }

    .cta-box {
      background: var(--color-navy);
      border-radius: var(--radius-md);
      padding: var(--space-12);
      text-align: center;
      margin: var(--space-16) 0 0;
    }

    .cta-box h2 {
      color: var(--color-text-inverse);
      margin-bottom: var(--space-4);
    }

    .cta-box p {
      color: var(--color-text-inverse-secondary);
      margin-bottom: var(--space-6);
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: var(--color-gold);
      color: var(--color-navy);
      font-weight: 600;
      padding: var(--space-4) var(--space-8);
      border-radius: var(--radius-sm);
      text-decoration: none;
      transition: background var(--transition-fast);
    }

    .cta-btn:hover {
      background: var(--color-gold-600);
      color: var(--color-navy);
    }

    .related {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-16) var(--container-padding);
    }

    .related-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-4);
    }

    .related-link {
      display: block;
      padding: var(--space-5);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      text-decoration: none;
      font-size: var(--fs-sm);
      color: var(--color-navy);
      font-weight: 500;
      transition: border-color var(--transition-fast);
    }

    .related-link:hover {
      border-color: var(--color-gold);
      color: var(--color-gold-600);
    }

    .not-found {
      max-width: var(--container-narrow);
      margin: 0 auto;
      padding: var(--space-24) var(--container-padding);
      text-align: center;
    }

    @media (max-width: 767px) {
      .scope-list {
        grid-template-columns: 1fr;
      }

      .related-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 480px) {
      .related-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  @property() slug = '';
  @state() private area = getPracticeArea(this.slug);

  updated(changed: Map<string, unknown>) {
    if (changed.has('slug')) {
      this.area = getPracticeArea(this.slug);
    }
  }

  private go(e: Event, path: string) {
    e.preventDefault();
    navigate(path);
  }

  render() {
    const area = this.area;
    if (!area) {
      return html`
        <div class="not-found">
          <h1>Practice area not found</h1>
          <p>The practice area you are looking for does not exist.</p>
          <a href="/practice-areas" @click=${(e: Event) => this.go(e, '/practice-areas')}
            >View all practice areas</a
          >
        </div>
      `;
    }

    const related = practiceAreas.filter((p) => p.slug !== area.slug).slice(0, 4);

    return html`
      <section class="page-hero">
        <div class="page-hero-inner">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/practice-areas" @click=${(e: Event) => this.go(e, '/practice-areas')}
              >Practice Areas</a
            >
            <span class="sep">/</span>
            <span>${area.title}</span>
          </nav>
          <div class="eyebrow">${firmCredential()}</div>
          <h1>${area.title}</h1>
          <p class="lead">${area.description}</p>
        </div>
      </section>

      <div class="body">
        <h2>Scope of Services</h2>
        <ul class="scope-list">
          ${area.scope.map(
            (item) => html`
              <li>${renderIcon('check', 18)}<span>${item}</span></li>
            `,
          )}
        </ul>

        ${area.faqs && area.faqs.length > 0
          ? html`
              <h2>Frequently Asked Questions</h2>
              <div class="faqs">
                ${area.faqs.map(
                  (faq) => html`
                    <div class="faq-item">
                      <h3>${faq.question}</h3>
                      <p>${faq.answer}</p>
                    </div>
                  `,
                )}
              </div>
            `
          : ''}

        <p style="font-size: var(--fs-sm); color: var(--color-text-light); margin-top: var(--space-8)">
          The information on this page is provided for general informational purposes only and
          does not constitute legal advice. Please consult with a qualified advocate regarding
          your specific circumstances.
        </p>

        <div class="cta-box">
          <h2>Need legal assistance in this area?</h2>
          <p>Contact us to schedule a consultation with one of our advocates.</p>
          <a class="cta-btn" href="/contact" @click=${(e: Event) => this.go(e, '/contact')}>
            Book a Consultation ${renderIcon('arrow-right', 18)}
          </a>
        </div>
      </div>

      <section class="related">
        <section-heading eyebrow="Explore More" heading="Related practice areas" .subtitle=${''}>
        </section-heading>
        <div class="related-grid">
          ${related.map(
            (rel) => html`
              <a
                class="related-link"
                href="/practice-areas/${rel.slug}"
                @click=${(e: Event) => this.go(e, `/practice-areas/${rel.slug}`)}
                >${rel.title}</a
              >
            `,
          )}
        </div>
      </section>
    `;
  }
}

function firmCredential(): string {
  return 'Advocates of the High Court of Kenya';
}

declare global {
  interface HTMLElementTagNameMap {
    'practice-area-detail-page': PracticeAreaDetailPage;
  }
}
