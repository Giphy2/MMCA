import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { firmInfo } from '../data/site';
import { navigate } from '../router';
import '../components/section-heading';
import { renderIcon } from '../components/icon';

@customElement('careers-page')
export class CareersPage extends LitElement {
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

    .section {
      padding: var(--space-24) 0;
    }

    .section-inner {
      max-width: var(--container-narrow);
      margin: 0 auto;
      padding: 0 var(--container-padding);
    }

    .section-inner p {
      color: var(--color-text-secondary);
      margin-bottom: var(--space-4);
    }

    .info-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-6);
      margin-top: var(--space-10);
    }

    .info-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: var(--space-8);
    }

    .info-card .icon {
      color: var(--color-gold-600);
      margin-bottom: var(--space-4);
    }

    .info-card h3 {
      font-size: var(--fs-lg);
      margin-bottom: var(--space-3);
      color: var(--color-navy);
    }

    .info-card p {
      font-size: var(--fs-sm);
      margin: 0;
    }

    .contact-box {
      background: var(--color-navy);
      border-radius: var(--radius-md);
      padding: var(--space-12);
      text-align: center;
      margin-top: var(--space-16);
    }

    .contact-box h2 {
      color: var(--color-text-inverse);
      margin-bottom: var(--space-4);
    }

    .contact-box p {
      color: var(--color-text-inverse-secondary);
      margin-bottom: var(--space-6);
    }

    .contact-actions {
      display: flex;
      gap: var(--space-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    .contact-actions a {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-6);
      border-radius: var(--radius-sm);
      font-weight: 500;
      font-size: var(--fs-sm);
      text-decoration: none;
      transition: background var(--transition-fast), border-color var(--transition-fast);
    }

    .contact-actions a.primary {
      background: var(--color-gold);
      color: var(--color-navy);
      border: 1px solid var(--color-gold);
    }

    .contact-actions a.primary:hover {
      background: var(--color-gold-600);
    }

    .contact-actions a.secondary {
      background: transparent;
      color: var(--color-text-inverse);
      border: 1px solid var(--color-border-navy);
    }

    .contact-actions a.secondary:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
    }

    .no-vacancies {
      text-align: center;
      padding: var(--space-12);
      background: var(--color-surface-alt);
      border-radius: var(--radius-md);
      margin-top: var(--space-8);
    }

    .no-vacancies h3 {
      font-size: var(--fs-xl);
      color: var(--color-navy);
      margin-bottom: var(--space-3);
    }

    .no-vacancies p {
      color: var(--color-text-secondary);
      font-size: var(--fs-sm);
      margin: 0;
    }

    @media (max-width: 767px) {
      .info-cards {
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
          <div class="eyebrow">Careers</div>
          <h1>Build your career at Mukele Moni Law</h1>
          <p>
            We are always interested in connecting with talented legal professionals who share
            our commitment to client service and professional excellence.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="section-inner">
          <section-heading
            eyebrow="Working With Us"
            heading="A commitment to professional growth"
            .subtitle=${''}
          ></section-heading>
          <p>
            At Mukele Moni Law, we value diligence, integrity, and a client-focused approach.
            Our firm offers an environment where advocates and support staff can develop their
            skills and contribute to meaningful legal work.
          </p>
          <p>
            We believe in mentoring the next generation of legal professionals and providing
            opportunities for growth across our practice areas in Nairobi and Kakamega.
          </p>

          <div class="info-cards">
            <div class="info-card">
              <div class="icon">${renderIcon('users', 24)}</div>
              <h3>What we look for</h3>
              <p>
                We seek candidates with strong academic backgrounds, excellent communication
                skills, and a genuine commitment to the legal profession. Integrity and a
                collaborative mindset are essential.
              </p>
            </div>
            <div class="info-card">
              <div class="icon">${renderIcon('book-open', 24)}</div>
              <h3>Opportunities</h3>
              <p>
                We welcome expressions of interest from qualified advocates, pupil magistrates,
                paralegals, and legal support staff. Opportunities arise across our practice
                areas as the firm grows.
              </p>
            </div>
          </div>

          <div class="no-vacancies">
            <h3>Current vacancies</h3>
            <p>
              There are no specific vacancies listed at this time. We welcome expressions of
              interest from qualified candidates and will respond when suitable opportunities
              arise.
            </p>
          </div>

          <div class="contact-box">
            <h2>Interested in joining our team?</h2>
            <p>
              Send us your CV and a brief cover letter outlining your areas of interest. We
              will keep your details on file and contact you when a suitable opportunity
              arises.
            </p>
            <div class="contact-actions">
              <a
                class="primary"
                href=${firmInfo.emailHref}
              >
                ${renderIcon('mail', 18)} Email your CV
              </a>
              <a
                class="secondary"
                href="/contact"
                @click=${(e: Event) => this.go(e, '/contact')}
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'careers-page': CareersPage;
  }
}
