import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { navigate } from '../router';

@customElement('not-found-page')
export class NotFoundPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-20) var(--container-padding);
    }

    .content {
      text-align: center;
      max-width: 500px;
    }

    .error-code {
      font-family: var(--font-heading);
      font-size: 5rem;
      font-weight: 700;
      color: var(--color-gold);
      line-height: 1;
      margin-bottom: var(--space-4);
    }

    h1 {
      font-size: var(--fs-2xl);
      color: var(--color-navy);
      margin-bottom: var(--space-4);
    }

    p {
      color: var(--color-text-secondary);
      margin-bottom: var(--space-8);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: var(--color-navy);
      color: var(--color-text-inverse);
      font-weight: 500;
      padding: var(--space-4) var(--space-8);
      border-radius: var(--radius-sm);
      text-decoration: none;
      border: 1px solid var(--color-navy);
      transition: background var(--transition-fast);
    }

    .btn:hover {
      background: var(--color-navy-700);
      color: var(--color-gold);
    }
  `;

  private goHome(e: Event) {
    e.preventDefault();
    navigate('/');
  }

  render() {
    return html`
      <div class="content">
        <div class="error-code">404</div>
        <h1>Page not found</h1>
        <p>
          The page you are looking for does not exist or may have been moved. Please use the
          navigation above to find what you need.
        </p>
        <a class="btn" href="/" @click=${this.goHome}>Return to homepage</a>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'not-found-page': NotFoundPage;
  }
}
