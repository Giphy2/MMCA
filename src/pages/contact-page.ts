import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { firmInfo } from '../data/site';
import { renderIcon } from '../components/icon';
import '../components/contact-form';

@customElement('contact-page')
export class ContactPage extends LitElement {
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

    .contact-layout {
      max-width: var(--container-max);
      margin: 0 auto;
      padding: var(--space-16) var(--container-padding);
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: var(--space-12);
      align-items: start;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
    }

    .info-card {
      display: flex;
      align-items: flex-start;
      gap: var(--space-4);
      padding: var(--space-5);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
    }

    .info-card .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: var(--radius-sm);
      background: var(--color-surface-alt);
      color: var(--color-gold-600);
      flex-shrink: 0;
    }

    .info-card h3 {
      font-size: var(--fs-base);
      font-family: var(--font-body);
      font-weight: 600;
      color: var(--color-navy);
      margin-bottom: var(--space-1);
    }

    .info-card a,
    .info-card p {
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
      text-decoration: none;
    }

    .info-card a:hover {
      color: var(--color-gold-600);
    }

    .offices-card {
      padding: var(--space-6);
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
    }

    .offices-card h3 {
      font-size: var(--fs-base);
      font-family: var(--font-body);
      font-weight: 600;
      color: var(--color-navy);
      margin-bottom: var(--space-4);
    }

    .office-item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      padding: var(--space-3) 0;
      border-bottom: 1px solid var(--color-border-subtle);
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
    }

    .office-item:last-child {
      border-bottom: none;
    }

    .office-item svg {
      color: var(--color-gold-600);
      flex-shrink: 0;
      margin-top: 2px;
    }

    .office-item .placeholder {
      font-size: var(--fs-xs);
      color: var(--color-text-light);
      display: block;
      margin-top: var(--space-1);
    }

    .form-section {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: var(--space-8);
    }

    .form-section h2 {
      font-size: var(--fs-2xl);
      color: var(--color-navy);
      margin-bottom: var(--space-3);
    }

    .form-section .intro {
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
      margin-bottom: var(--space-8);
    }

    .process-section {
      background: var(--color-surface);
      padding: var(--space-16) 0;
    }

    .process-inner {
      max-width: var(--container-narrow);
      margin: 0 auto;
      padding: 0 var(--container-padding);
    }

    .process-steps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-8);
      margin-top: var(--space-10);
    }

    .process-step {
      text-align: center;
    }

    .step-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--color-navy);
      color: var(--color-gold);
      font-family: var(--font-heading);
      font-size: var(--fs-xl);
      font-weight: 600;
      margin-bottom: var(--space-4);
    }

    .process-step h3 {
      font-size: var(--fs-lg);
      color: var(--color-navy);
      margin-bottom: var(--space-2);
    }

    .process-step p {
      font-size: var(--fs-sm);
      color: var(--color-text-secondary);
    }

    @media (max-width: 1023px) {
      .contact-layout {
        grid-template-columns: 1fr;
        gap: var(--space-8);
      }

      .process-steps {
        grid-template-columns: 1fr;
        gap: var(--space-8);
      }
    }

    @media (max-width: 480px) {
      .form-section {
        padding: var(--space-5);
      }
    }
  `;

  render() {
    return html`
      <section class="page-hero">
        <div class="page-hero-inner">
          <div class="eyebrow">Contact Us</div>
          <h1>Get in touch</h1>
          <p>
            We are here to help with your legal matters. Reach out to schedule a consultation
            or to learn more about our services.
          </p>
        </div>
      </section>

      <div class="contact-layout">
        <div class="contact-info">
          <div class="info-card">
            <div class="icon">${renderIcon('mail', 22)}</div>
            <div>
              <h3>Email</h3>
              <a href=${firmInfo.emailHref}>${firmInfo.email}</a>
            </div>
          </div>
          <div class="info-card">
            <div class="icon">${renderIcon('phone', 22)}</div>
            <div>
              <h3>Telephone</h3>
              <a href=${firmInfo.phoneHref}>${firmInfo.phone}</a>
            </div>
          </div>
          <div class="offices-card">
            <h3>Our Offices</h3>
            ${firmInfo.offices.map(
              (office) => html`
                <div class="office-item">
                  ${renderIcon('map-pin', 18)}
                  <div>
                    <strong>${office.city}</strong>, ${office.region}
                    <span class="placeholder"
                      >[Office address to be provided by the firm]</span
                    >
                  </div>
                </div>
              `,
            )}
          </div>
        </div>

        <div class="form-section">
          <h2>Send us an enquiry</h2>
          <p class="intro">
            Fill out the form below and we will respond to your enquiry as soon as possible.
            Fields marked with * are required.
          </p>
          <contact-form></contact-form>
        </div>
      </div>

      <section class="process-section">
        <div class="process-inner">
          <h2 style="text-align: center; font-size: var(--fs-3xl); color: var(--color-navy); margin-bottom: var(--space-4);">
            What to expect
          </h2>
          <p style="text-align: center; color: var(--color-text-secondary); font-size: var(--fs-lg);">
            Our enquiry process is straightforward and confidential.
          </p>
          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>Send your enquiry</h3>
              <p>
                Complete the contact form or email us with details of your legal matter.
              </p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>We respond</h3>
              <p>
                A member of our team will review your enquiry and contact you to discuss next
                steps.
              </p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>Consultation</h3>
              <p>
                We schedule a consultation to understand your needs and advise on the best path
                forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'contact-page': ContactPage;
  }
}
