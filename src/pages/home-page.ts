import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { practiceAreas } from '../data/practice-areas';
import { insights } from '../data/insights';
import { firmInfo } from '../data/site';
import { navigate } from '../router';
import '../components/section-heading';
import '../components/service-card';
import { renderIcon } from '../components/icon';

const HERO_IMAGE =
  'https://images.pexels.com/photos/6077797/pexels-photo-6077797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const ABOUT_IMAGE =
  'https://images.pexels.com/photos/7876088/pexels-photo-7876088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    /* Hero */
    .hero {
      background: var(--color-navy);
      color: var(--color-text-inverse);
      padding: var(--space-24) 0;
      position: relative;
      overflow: hidden;
    }

    .hero-inner {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-16);
      align-items: center;
    }

    .hero-eyebrow {
      font-size: var(--fs-xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-gold);
      margin-bottom: var(--space-4);
      font-weight: 600;
    }

    .hero h1 {
      font-size: var(--fs-5xl);
      color: var(--color-text-inverse);
      margin-bottom: var(--space-6);
      line-height: 1.1;
    }

    .hero-text {
      font-size: var(--fs-lg);
      color: var(--color-text-inverse-secondary);
      line-height: var(--lh-body);
      margin-bottom: var(--space-8);
      max-width: 520px;
    }

    .hero-cta-group {
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: var(--color-gold);
      color: var(--color-navy);
      font-weight: 600;
      padding: var(--space-4) var(--space-8);
      border-radius: var(--radius-sm);
      text-decoration: none;
      border: 1px solid var(--color-gold);
      transition: background var(--transition-fast);
    }

    .btn-primary:hover {
      background: var(--color-gold-600);
      color: var(--color-navy);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: transparent;
      color: var(--color-text-inverse);
      font-weight: 500;
      padding: var(--space-4) var(--space-8);
      border-radius: var(--radius-sm);
      text-decoration: none;
      border: 1px solid var(--color-border-navy);
      transition: border-color var(--transition-fast), color var(--transition-fast);
    }

    .btn-secondary:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
    }

    .hero-image {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: var(--radius-md);
      border: 1px solid var(--color-border-navy);
    }

    /* Intro */
    .intro {
      padding: var(--space-24) 0;
    }

    .intro-inner {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-16);
      align-items: center;
    }

    .intro-image {
      width: 100%;
      aspect-ratio: 5 / 4;
      object-fit: cover;
      border-radius: var(--radius-md);
    }

    .intro-content h2 {
      margin-bottom: var(--space-6);
    }

    .intro-content p {
      color: var(--color-text-secondary);
      margin-bottom: var(--space-4);
    }

    .intro-locations {
      display: flex;
      gap: var(--space-6);
      margin-top: var(--space-6);
      padding-top: var(--space-6);
      border-top: 1px solid var(--color-border);
    }

    .location-item {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--fs-sm);
      color: var(--color-text);
      font-weight: 500;
    }

    .location-item svg {
      color: var(--color-gold-600);
    }

    /* Practice Areas */
    .practice-section {
      background: var(--color-surface);
      padding: var(--space-24) 0;
    }

    .practice-grid {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-6);
    }

    /* Why Choose */
    .why-section {
      padding: var(--space-24) 0;
    }

    .why-grid {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-8);
    }

    .why-card {
      text-align: center;
    }

    .why-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: var(--color-surface-alt);
      color: var(--color-gold-600);
      margin-bottom: var(--space-5);
    }

    .why-card h3 {
      font-size: var(--fs-xl);
      margin-bottom: var(--space-3);
    }

    .why-card p {
      color: var(--color-text-secondary);
      font-size: var(--fs-sm);
    }

    /* CTA */
    .cta-section {
      background: var(--color-navy);
      padding: var(--space-20) 0;
      text-align: center;
    }

    .cta-inner {
      max-width: 700px;
      margin: 0 auto;
      padding: 0 var(--container-padding);
    }

    .cta-section h2 {
      color: var(--color-text-inverse);
      margin-bottom: var(--space-5);
    }

    .cta-section p {
      color: var(--color-text-inverse-secondary);
      font-size: var(--fs-lg);
      margin-bottom: var(--space-8);
    }

    /* Insights */
    .insights-section {
      background: var(--color-surface);
      padding: var(--space-24) 0;
    }

    .insights-grid {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-6);
    }

    .insight-card {
      display: flex;
      flex-direction: column;
      background: var(--color-bg);
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
    }

    .view-all-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      margin-top: var(--space-8);
      color: var(--color-gold-600);
      font-weight: 500;
      font-size: var(--fs-sm);
    }

    /* Contact preview */
    .contact-preview {
      padding: var(--space-24) 0;
    }

    .contact-grid {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-8);
      text-align: center;
    }

    .contact-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-3);
    }

    .contact-card .icon-circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--color-surface-alt);
      color: var(--color-gold-600);
    }

    .contact-card a {
      font-size: var(--fs-base);
      color: var(--color-navy);
      font-weight: 500;
    }

    .contact-card a:hover {
      color: var(--color-gold-600);
    }

    .contact-card .label {
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
    }

    @media (max-width: 1023px) {
      .hero-inner,
      .intro-inner {
        grid-template-columns: 1fr;
        gap: var(--space-12);
      }

      .practice-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .why-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .insights-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 767px) {
      .hero {
        padding: var(--space-16) 0;
      }

      .practice-grid {
        grid-template-columns: 1fr;
      }

      .why-grid {
        grid-template-columns: 1fr;
        gap: var(--space-10);
      }

      .insights-grid {
        grid-template-columns: 1fr;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: var(--space-10);
      }
    }
  `;

  private go(e: Event, path: string) {
    e.preventDefault();
    navigate(path);
  }

  render() {
    return html`
      <!-- Hero -->
      <section class="hero">
        <div class="hero-inner">
          <div>
            <div class="hero-eyebrow">${firmInfo.credential}</div>
            <h1>Legal counsel built on trust and diligence</h1>
            <p class="hero-text">
              Mukele Moni Law provides professional legal services to individuals and
              businesses across Kenya, with offices in Nairobi and Kakamega.
            </p>
            <div class="hero-cta-group">
              <a class="btn-primary" href="/contact" @click=${(e: Event) => this.go(e, '/contact')}>
                Book a Consultation
              </a>
              <a
                class="btn-secondary"
                href="/practice-areas"
                @click=${(e: Event) => this.go(e, '/practice-areas')}
              >
                Explore Practice Areas
              </a>
            </div>
          </div>
          <div>
            <img
              class="hero-image"
              src=${HERO_IMAGE}
              alt="Golden justice scales on a legal desk"
              loading="eager"
              width="940"
              height="650"
            />
          </div>
        </div>
      </section>

      <!-- Firm Introduction -->
      <section class="intro">
        <div class="intro-inner">
          <div>
            <img
              class="intro-image"
              src=${ABOUT_IMAGE}
              alt="Legal professional at a desk with law books"
              loading="lazy"
              width="940"
              height="650"
            />
          </div>
          <div class="intro-content">
            <section-heading
              eyebrow="About the Firm"
              heading="Professional legal services, client-focused approach"
              .subtitle=${''}
              align="left"
            ></section-heading>
            <p>
              Mukele Moni Law is a Kenyan law firm serving clients in Nairobi, Kakamega, and
              beyond. We are committed to providing clear, practical legal advice and
              diligent representation across a range of practice areas.
            </p>
            <p>
              Our approach is grounded in understanding each client's unique circumstances and
              delivering tailored legal solutions. We prioritise communication, transparency,
              and attention to detail in every matter we handle.
            </p>
            <div class="intro-locations">
              ${firmInfo.offices.map(
                (office) => html`
                  <div class="location-item">
                    ${renderIcon('map-pin', 18)}
                    <span>${office.city}</span>
                  </div>
                `,
              )}
            </div>
          </div>
        </div>
      </section>

      <!-- Practice Areas -->
      <section class="practice-section">
        <div style="padding: 0 var(--container-padding)">
          <section-heading
            eyebrow="Our Services"
            heading="Practice Areas"
            subtitle="Comprehensive legal services tailored to meet the needs of individuals and businesses."
          ></section-heading>
        </div>
        <div class="practice-grid">
          ${practiceAreas.map(
            (area) => html`<service-card .area=${area}></service-card>`,
          )}
        </div>
      </section>

      <!-- Why Choose -->
      <section class="why-section">
        <div style="padding: 0 var(--container-padding)">
          <section-heading
            eyebrow="Our Approach"
            heading="Why clients choose Mukele Moni Law"
            subtitle="We combine legal expertise with a commitment to client service."
          ></section-heading>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon">${renderIcon('shield', 28)}</div>
            <h3>Diligent Representation</h3>
            <p>
              We approach every matter with thorough preparation and attention to detail,
              ensuring your interests are protected.
            </p>
          </div>
          <div class="why-card">
            <div class="why-icon">${renderIcon('users', 28)}</div>
            <h3>Client-Focused Service</h3>
            <p>
              We take the time to understand your needs and provide clear, practical advice
              at every stage of your matter.
            </p>
          </div>
          <div class="why-card">
            <div class="why-icon">${renderIcon('book-open', 28)}</div>
            <h3>Legal Expertise</h3>
            <p>
              Our team is knowledgeable across multiple practice areas, providing
              comprehensive legal support to individuals and businesses.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="cta-inner">
          <h2>Ready to discuss your legal matter?</h2>
          <p>
            Contact us to schedule a consultation. We are here to provide the guidance you
            need.
          </p>
          <a class="btn-primary" href="/contact" @click=${(e: Event) => this.go(e, '/contact')}>
            Book a Consultation
          </a>
        </div>
      </section>

      <!-- Insights -->
      <section class="insights-section">
        <div style="padding: 0 var(--container-padding)">
          <section-heading
            eyebrow="Insights"
            heading="Legal commentary & updates"
            subtitle="Articles and perspectives on legal developments in Kenya."
          ></section-heading>
        </div>
        <div class="insights-grid">
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
        <div style="padding: 0 var(--container-padding); text-align: center;">
          <a
            class="view-all-link"
            href="/insights"
            @click=${(e: Event) => this.go(e, '/insights')}
          >
            View all insights ${renderIcon('arrow-right', 16)}
          </a>
        </div>
      </section>

      <!-- Contact Preview -->
      <section class="contact-preview">
        <div style="padding: 0 var(--container-padding)">
          <section-heading
            eyebrow="Get in Touch"
            heading="Contact us"
            subtitle="Reach out to discuss your legal needs."
          ></section-heading>
        </div>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="icon-circle">${renderIcon('mail', 24)}</div>
            <a href=${firmInfo.emailHref}>${firmInfo.email}</a>
            <span class="label">Email us</span>
          </div>
          <div class="contact-card">
            <div class="icon-circle">${renderIcon('phone', 24)}</div>
            <a href=${firmInfo.phoneHref}>${firmInfo.phone}</a>
            <span class="label">Call us</span>
          </div>
          <div class="contact-card">
            <div class="icon-circle">${renderIcon('map-pin', 24)}</div>
            <a href="/contact" @click=${(e: Event) => this.go(e, '/contact')}>Our Offices</a>
            <span class="label">Nairobi &middot; Kakamega</span>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage;
  }
}
