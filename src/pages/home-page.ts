import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { practiceAreas } from '../data/practice-areas';
import { insights } from '../data/insights';
import { firmInfo } from '../data/site';
import { navigate } from '../router';
import '../components/section-heading';
import '../components/service-card';
import { renderIcon } from '../components/icon';

const HERO_IMAGE = '/hero1.jpg';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    /* Hero — full-width background image with dark overlay */
    .hero {
      position: relative;
      min-height: 600px;
      display: flex;
      align-items: center;
      color: var(--color-text-inverse);
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      z-index: 0;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to right,
        rgba(6, 14, 24, 0.85) 0%,
        rgba(6, 14, 24, 0.72) 40%,
        rgba(6, 14, 24, 0.55) 70%,
        rgba(6, 14, 24, 0.4) 100%
      );
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-20) var(--container-padding);
      width: 100%;
    }

    .hero-inner {
      max-width: 640px;
    }

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--fs-xs);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-gold);
      margin-bottom: var(--space-5);
      font-weight: 600;
    }

    .hero-eyebrow::before {
      content: '';
      width: 32px;
      height: 1px;
      background: var(--color-gold);
    }

    .hero h1 {
      font-size: var(--fs-5xl);
      color: var(--color-text-inverse);
      margin-bottom: var(--space-6);
      line-height: 1.1;
      font-weight: 600;
    }

    .hero-text {
      font-size: var(--fs-lg);
      color: var(--color-text-inverse-secondary);
      line-height: var(--lh-body);
      margin-bottom: var(--space-8);
      max-width: 540px;
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
      border: 1px solid rgba(255, 255, 255, 0.3);
      transition: border-color var(--transition-fast), color var(--transition-fast);
    }

    .btn-secondary:hover {
      border-color: var(--color-gold);
      color: var(--color-gold);
    }

    /* MMCA Intro Section */
    .mmca-intro {
      padding: var(--space-20) 0;
      background: var(--color-surface);
    }

    .mmca-inner {
      max-width: var(--container-narrow);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      text-align: center;
    }

    .mmca-inner .eyebrow {
      display: inline-block;
      font-size: var(--fs-xs);
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-gold-600);
      margin-bottom: var(--space-4);
    }

    .mmca-inner h2 {
      font-size: var(--fs-4xl);
      color: var(--color-navy);
      margin-bottom: var(--space-6);
    }

    .mmca-inner p {
      color: var(--color-text-secondary);
      font-size: var(--fs-lg);
      line-height: 1.7;
      margin-bottom: var(--space-5);
      text-align: left;
    }

    .mmca-inner p:last-of-type {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .read-more-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      margin-top: var(--space-4);
      color: var(--color-gold-600);
      font-weight: 600;
      font-size: var(--fs-base);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .read-more-btn:hover {
      color: var(--color-navy);
    }

    .read-more-btn svg {
      transition: transform var(--transition-fast);
    }

    .read-more-btn:hover svg {
      transform: translateX(4px);
    }

    /* Practice Areas */
    .practice-section {
      background: var(--color-bg);
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
      background: var(--color-surface);
    }

    .why-grid {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      display: grid;
      grid-template-columns: repeat(4, 1fr);
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
      font-size: var(--fs-lg);
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
      background: var(--color-bg);
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
      .practice-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .why-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .insights-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 767px) {
      .hero {
        min-height: 500px;
      }

      .hero-content {
        padding: var(--space-16) var(--container-padding);
      }

      .hero h1 {
        font-size: var(--fs-4xl);
      }

      .hero-text {
        font-size: var(--fs-base);
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
      <!-- Hero with background image and overlay -->
      <section class="hero">
        <div class="hero-bg" style="background-image: url('${HERO_IMAGE}')"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-inner">
            <div class="hero-eyebrow">${firmInfo.credential}</div>
            <h1>Your Trusted Partner in Complex Legal Matters</h1>
            <p class="hero-text">
              From individuals to multinational organizations, we provide personalized
              strategies rooted in deep industry knowledge, modern legal research, and a
              collaborative approach that ensures optimal outcomes.
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
        </div>
      </section>

      <!-- MMCA Intro Section -->
      <section class="mmca-intro">
        <div class="mmca-inner">
          <span class="eyebrow">About the Firm</span>
          <h2>Mukele Moni &amp; Company Advocates</h2>
          <p>
            Mukele Moni and Company Advocates is a premier law firm headquartered in Nairobi,
            Kenya, proudly serving clients since 2006. Over the years, we have grown into one
            of the nation's most respected legal practices—recognized for our ability to
            deliver tailored, practical, and effective legal solutions that inspire confidence
            and drive real results.
          </p>
          <p>
            Built on a foundation of excellence, integrity, and true client-focused service,
            our firm brings together a team of 22 highly skilled and dynamic professionals.
            With diverse legal backgrounds and a unified dedication to exceptional
            representation, we continue to set the standard for legal service delivery in
            Kenya. Our client base is as diverse as our expertise—ranging from individuals and
            start-ups to multinational corporations, government institutions, and
            non-governmental organizations. Whether local or international, every client
            receives the same unwavering commitment to quality, clarity, and strategic legal
            guidance.
          </p>
          <p>
            At Mukele Moni and Company Advocates, we understand that every client is unique.
            This is why we craft personalized legal strategies that align with each client's
            goals and expectations. Our approach combines deep industry insight, cutting-edge
            research tools, and a collaborative internal culture—ensuring solutions that are
            not only effective but truly transformative.
          </p>
          <a
            class="read-more-btn"
            href="/about"
            @click=${(e: Event) => this.go(e, '/about')}
          >
            Read more ${renderIcon('arrow-right', 18)}
          </a>
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

      <!-- Why Choose — four key strengths -->
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
            <div class="why-icon">${renderIcon('map-pin', 28)}</div>
            <h3>National Reach</h3>
            <p>
              With headquarters in Nairobi and a fully integrated branch in Kakamega, we offer
              seamless, accessible, and consistent legal support across Kenya's diverse
              regions.
            </p>
          </div>
          <div class="why-card">
            <div class="why-icon">${renderIcon('briefcase', 28)}</div>
            <h3>Comprehensive Solutions</h3>
            <p>
              Our four specialist departments—Litigation, Conveyancing, Commercial, and
              Intellectual Property—deliver expert representation across every area of law.
            </p>
          </div>
          <div class="why-card">
            <div class="why-icon">${renderIcon('users', 28)}</div>
            <h3>Strategic Representation</h3>
            <p>
              We understand that every client is unique. Our tailored legal strategies align
              with your goals, blending experience, innovation, and dedication.
            </p>
          </div>
          <div class="why-card">
            <div class="why-icon">${renderIcon('shield', 28)}</div>
            <h3>Trusted Expertise</h3>
            <p>
              From individuals to multinational organizations, we provide personalized
              strategies rooted in deep industry knowledge and modern legal research.
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
