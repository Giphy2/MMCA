import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { firmInfo } from '../data/site';
import { navigate } from '../router';
import '../components/section-heading';
import { renderIcon } from '../components/icon';

@customElement('about-page')
export class AboutPage extends LitElement {
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

    .section--alt {
      background: var(--color-surface);
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

    .values-grid {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-8);
    }

    .value-card {
      text-align: center;
    }

    .value-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--color-surface-alt);
      color: var(--color-gold-600);
      margin-bottom: var(--space-4);
    }

    .value-card h3 {
      font-size: var(--fs-lg);
      margin-bottom: var(--space-2);
    }

    .value-card p {
      font-size: var(--fs-sm);
    }

    .offices-grid {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 var(--container-padding);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--space-6);
    }

    .office-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: var(--space-8);
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .office-card .icon {
      color: var(--color-gold-600);
    }

    .office-card h3 {
      font-size: var(--fs-xl);
      color: var(--color-navy);
    }

    .office-card p {
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
    }

    .cta-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      margin-top: var(--space-6);
      color: var(--color-gold-600);
      font-weight: 500;
    }

    @media (max-width: 767px) {
      .values-grid {
        grid-template-columns: 1fr;
        gap: var(--space-8);
      }

      .offices-grid {
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
          <div class="eyebrow">About Us</div>
          <h1>Committed to professional legal service</h1>
          <p>
            Mukele Moni Law is a Kenyan law firm providing legal services to individuals and
            businesses, with offices in Nairobi and Kakamega.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="section-inner">
          <section-heading
            eyebrow="Who We Are"
            heading="Our firm"
            .subtitle=${''}
          ></section-heading>
          <p>
            Mukele Moni Law was established to provide accessible, professional legal services
            to clients across Kenya. We serve individuals, families, businesses, and
            organisations, offering counsel across a range of practice areas.
          </p>
          <p>
            Our team approaches each matter with diligence and a commitment to achieving the
            best possible outcome for our clients. We believe that effective legal
            representation begins with listening — understanding the full context of a
            client's situation before advising on a path forward.
          </p>
          <p>
            We are Advocates of the High Court of Kenya, and we maintain the professional
            standards expected of legal practitioners in Kenya.
          </p>
        </div>
      </section>

      <section class="section section--alt">
        <div style="padding: 0 var(--container-padding)">
          <section-heading
            eyebrow="What We Stand For"
            heading="Our mission & values"
            subtitle="The principles that guide our practice and client relationships."
          ></section-heading>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">${renderIcon('shield', 24)}</div>
            <h3>Integrity</h3>
            <p>
              We uphold the highest ethical standards in every matter, acting honestly and
              transparently on behalf of our clients.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">${renderIcon('users', 24)}</div>
            <h3>Client Focus</h3>
            <p>
              We place our clients at the centre of everything we do, ensuring their needs and
              objectives drive our approach.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">${renderIcon('book-open', 24)}</div>
            <h3>Excellence</h3>
            <p>
              We pursue the highest standard of legal work, combining thorough preparation with
              practical, commercial awareness.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-inner">
          <section-heading
            eyebrow="How We Work"
            heading="Our approach to client service"
            .subtitle=${''}
          ></section-heading>
          <p>
            We begin every engagement by understanding the client's objectives and the
            context of their legal matter. From there, we provide clear advice on available
            options, potential outcomes, and the recommended path forward.
          </p>
          <p>
            Communication is central to our practice. We keep clients informed at every stage,
            explain legal issues in plain language, and respond promptly to questions and
            concerns.
          </p>
          <p>
            Our goal is not just to resolve legal matters, but to build lasting relationships
            with clients who trust us to handle their legal needs over time.
          </p>
        </div>
      </section>

      <section class="section section--alt">
        <div style="padding: 0 var(--container-padding)">
          <section-heading
            eyebrow="Our Locations"
            heading="Offices in Nairobi and Kakamega"
            subtitle="We serve clients from two locations in Kenya."
          ></section-heading>
        </div>
        <div class="offices-grid">
          ${firmInfo.offices.map(
            (office) => html`
              <div class="office-card">
                <div class="icon">${renderIcon('map-pin', 28)}</div>
                <h3>${office.city}</h3>
                <p>${office.region}</p>
                <p>
                  [Office address to be provided by the firm. Contact us for directions and
                  appointment scheduling.]
                </p>
              </div>
            `,
          )}
        </div>
      </section>

      <section class="section">
        <div class="section-inner" style="text-align: center">
          <section-heading
            eyebrow="Our People"
            heading="Meet our team"
            .subtitle=${''}
          ></section-heading>
          <p>
            Our advocates bring knowledge and dedication to every matter we handle. Learn more
            about our team and their areas of practice.
          </p>
          <a class="cta-link" href="/our-team" @click=${(e: Event) => this.go(e, '/our-team')}>
            View our team ${renderIcon('arrow-right', 16)}
          </a>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'about-page': AboutPage;
  }
}
