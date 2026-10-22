import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { firmInfo } from '../data/site';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const categories = [
  'General Enquiry',
  'Corporate & Commercial Law',
  'Civil Litigation & Dispute Resolution',
  'Conveyancing & Real Estate',
  'Employment & Labour Law',
  'Family & Succession Law',
  'Banking & Finance',
  'Intellectual Property',
  'Legal Advisory & Compliance',
  'Careers',
];

@customElement('contact-form')
export class ContactForm extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: var(--space-5);
    }

    .field-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-5);
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    label {
      font-size: var(--fs-sm);
      font-weight: 500;
      color: var(--color-text);
    }

    .required {
      color: var(--color-error);
    }

    input,
    select,
    textarea {
      font-family: var(--font-body);
      font-size: var(--fs-base);
      padding: var(--space-3) var(--space-4);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      background: var(--color-surface);
      color: var(--color-text);
      transition: border-color var(--transition-fast);
      width: 100%;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
      border-color: var(--color-gold);
      box-shadow: 0 0 0 3px rgba(197, 168, 105, 0.15);
    }

    input[aria-invalid='true'],
    textarea[aria-invalid='true'] {
      border-color: var(--color-error);
    }

    textarea {
      resize: vertical;
      min-height: 120px;
    }

    .error-msg {
      font-size: var(--fs-xs);
      color: var(--color-error);
      min-height: 1em;
    }

    .submit-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      background: var(--color-navy);
      color: var(--color-text-inverse);
      font-size: var(--fs-base);
      font-weight: 500;
      padding: var(--space-4) var(--space-8);
      border: 1px solid var(--color-navy);
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: background var(--transition-fast);
      align-self: flex-start;
    }

    .submit-btn:hover:not(:disabled) {
      background: var(--color-navy-700);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .status-msg {
      padding: var(--space-4) var(--space-5);
      border-radius: var(--radius-sm);
      font-size: var(--fs-sm);
    }

    .status-msg.success {
      background: rgba(21, 128, 61, 0.08);
      border: 1px solid rgba(21, 128, 61, 0.2);
      color: var(--color-success);
    }

    .status-msg.error {
      background: rgba(185, 28, 28, 0.08);
      border: 1px solid rgba(185, 28, 28, 0.2);
      color: var(--color-error);
    }

    .privacy-note {
      font-size: var(--fs-xs);
      color: var(--color-text-secondary);
      line-height: var(--lh-body);
    }

    @media (max-width: 600px) {
      .field-group {
        grid-template-columns: 1fr;
        gap: var(--space-5);
      }

      .submit-btn {
        align-self: stretch;
      }
    }
  `;

  @state() private formData: FormData = {
    fullName: '',
    email: '',
    phone: '',
    category: categories[0],
    message: '',
  };

  @state() private errors: FormErrors = {};
  @state() private status: FormStatus = 'idle';

  private validate(): FormErrors {
    const errs: FormErrors = {};
    if (!this.formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!this.formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!this.formData.message.trim()) {
      errs.message = 'Please enter your enquiry message.';
    }
    return errs;
  }

  private updateField(field: keyof FormData, value: string) {
    this.formData = { ...this.formData, [field]: value };
    if (this.errors[field as keyof FormErrors]) {
      this.errors = { ...this.errors, [field]: undefined };
    }
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    const errs = this.validate();
    this.errors = errs;
    if (Object.values(errs).some((v) => v)) {
      this.status = 'idle';
      return;
    }

    this.status = 'submitting';
    try {
      // Backend integration required: replace this with a real submission endpoint
      // when available. Currently no backend form service is configured.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      this.status = 'error';
    } catch {
      this.status = 'error';
    }
  }

  render() {
    return html`
      <form class="form" novalidate @submit=${this.handleSubmit}>
        ${this.status === 'error'
          ? html`
              <div class="status-msg error" role="alert">
                We could not send your message because a form submission service has not
                been configured yet. Please email us directly at
                <a href=${firmInfo.emailHref}>${firmInfo.email}</a> or call
                <a href=${firmInfo.phoneHref}>${firmInfo.phone}</a>.
              </div>
            `
          : ''}
        ${this.status === 'success'
          ? html`
              <div class="status-msg success" role="status">
                Thank you for your enquiry. We will respond to you shortly.
              </div>
            `
          : ''}
        <div class="field-group">
          <div class="field">
            <label for="fullName">Full Name <span class="required">*</span></label>
            <input
              id="fullName"
              type="text"
              .value=${this.formData.fullName}
              @input=${(e: Event) =>
                this.updateField('fullName', (e.target as HTMLInputElement).value)}
              aria-invalid=${this.errors.fullName ? 'true' : 'false'}
              aria-describedby=${this.errors.fullName ? 'fullName-error' : ''}
            />
            ${this.errors.fullName
              ? html`<span class="error-msg" id="fullName-error" role="alert"
                  >${this.errors.fullName}</span
                >`
              : html`<span class="error-msg"></span>`}
          </div>
          <div class="field">
            <label for="email">Email Address <span class="required">*</span></label>
            <input
              id="email"
              type="email"
              .value=${this.formData.email}
              @input=${(e: Event) =>
                this.updateField('email', (e.target as HTMLInputElement).value)}
              aria-invalid=${this.errors.email ? 'true' : 'false'}
              aria-describedby=${this.errors.email ? 'email-error' : ''}
            />
            ${this.errors.email
              ? html`<span class="error-msg" id="email-error" role="alert"
                  >${this.errors.email}</span
                >`
              : html`<span class="error-msg"></span>`}
          </div>
        </div>
        <div class="field-group">
          <div class="field">
            <label for="phone">Telephone Number</label>
            <input
              id="phone"
              type="tel"
              .value=${this.formData.phone}
              @input=${(e: Event) =>
                this.updateField('phone', (e.target as HTMLInputElement).value)}
            />
            <span class="error-msg"></span>
          </div>
          <div class="field">
            <label for="category">Enquiry Category</label>
            <select
              id="category"
              .value=${this.formData.category}
              @change=${(e: Event) =>
                this.updateField('category', (e.target as HTMLSelectElement).value)}
            >
              ${categories.map((cat) => html`<option value=${cat}>${cat}</option>`)}
            </select>
            <span class="error-msg"></span>
          </div>
        </div>
        <div class="field">
          <label for="message">Message <span class="required">*</span></label>
          <textarea
            id="message"
            .value=${this.formData.message}
            @input=${(e: Event) =>
              this.updateField('message', (e.target as HTMLTextAreaElement).value)}
            aria-invalid=${this.errors.message ? 'true' : 'false'}
            aria-describedby=${this.errors.message ? 'message-error' : ''}
          ></textarea>
          ${this.errors.message
            ? html`<span class="error-msg" id="message-error" role="alert"
                >${this.errors.message}</span
              >`
            : html`<span class="error-msg"></span>`}
        </div>
        <p class="privacy-note">
          By submitting this form, you consent to us contacting you regarding your enquiry.
          Your information will be handled in accordance with applicable data protection laws.
        </p>
        <button class="submit-btn" type="submit" ?disabled=${this.status === 'submitting'}>
          ${this.status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
        </button>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'contact-form': ContactForm;
  }
}
