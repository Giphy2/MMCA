import { render, html, type TemplateResult } from 'lit';
import './styles/global.css';
import './components/top-utility-bar';
import './components/site-header';
import './components/mobile-navigation';
import './components/site-footer';
import './components/back-to-top';
import './pages/home-page';
import './pages/about-page';
import './pages/practice-areas-page';
import './pages/practice-area-detail-page';
import './pages/our-team-page';
import './pages/insights-page';
import './pages/insight-detail-page';
import './pages/careers-page';
import './pages/contact-page';
import './pages/not-found-page';

import { addRoute, matchRoute, getMatchedParams, getCurrentPath } from './router';
import { practiceAreas } from './data/practice-areas';

const pageMap: Record<string, (params: Record<string, string>) => TemplateResult> = {
  home: () => html`<home-page></home-page>`,
  about: () => html`<about-page></about-page>`,
  'practice-areas': () => html`<practice-areas-page></practice-areas-page>`,
  'practice-area-detail': (params) =>
    html`<practice-area-detail-page .slug=${params.slug}></practice-area-detail-page>`,
  'our-team': () => html`<our-team-page></our-team-page>`,
  insights: () => html`<insights-page></insights-page>`,
  'insight-detail': (params) =>
    html`<insight-detail-page .slug=${params.slug}></insight-detail-page>`,
  careers: () => html`<careers-page></careers-page>`,
  contact: () => html`<contact-page></contact-page>`,
  'not-found': () => html`<not-found-page></not-found-page>`,
};

addRoute('/', pageMap.home, 'Mukele Moni Law — Advocates of the High Court of Kenya', 'Professional legal services in Nairobi and Kakamega, Kenya.');
addRoute('/about', pageMap.about, 'About — Mukele Moni Law', 'Learn about Mukele Moni Law, our mission, values, and approach to client service.');
addRoute('/practice-areas', pageMap['practice-areas'], 'Practice Areas — Mukele Moni Law', 'Explore our legal practice areas including corporate law, litigation, conveyancing, and more.');
addRoute('/practice-areas/:slug', pageMap['practice-area-detail'], 'Practice Area — Mukele Moni Law', 'Detailed information about a specific practice area.');
addRoute('/our-team', pageMap['our-team'], 'Our Team — Mukele Moni Law', 'Meet the advocates at Mukele Moni Law.');
addRoute('/insights', pageMap.insights, 'Insights — Mukele Moni Law', 'Legal commentary and updates from Mukele Moni Law.');
addRoute('/insights/:slug', pageMap['insight-detail'], 'Article — Mukele Moni Law', 'A legal article or commentary from Mukele Moni Law.');
addRoute('/careers', pageMap.careers, 'Careers — Mukele Moni Law', 'Career opportunities and expressions of interest at Mukele Moni Law.');
addRoute('/contact', pageMap.contact, 'Contact — Mukele Moni Law', 'Contact Mukele Moni Law to schedule a consultation.');

function renderPage() {
  const path = getCurrentPath();
  const matched = matchRoute(path);

  let title: string;
  let description: string;
  let params: Record<string, string> = {};
  let pageContent: TemplateResult;

  if (!matched) {
    title = 'Page Not Found — Mukele Moni Law';
    description = 'The page you are looking for does not exist.';
    pageContent = html`<not-found-page></not-found-page>`;
  } else {
    params = getMatchedParams(matched);
    title = matched.title;
    description = matched.description;
    pageContent = matched.render(params);
  }

  if (path.startsWith('/practice-areas/') && params.slug) {
    const area = practiceAreas.find((p) => p.slug === params.slug);
    if (area) {
      title = `${area.title} — Mukele Moni Law`;
      description = area.shortDescription;
    }
  }

  document.title = title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', description);

  const shell = html`
    <top-utility-bar></top-utility-bar>
    <site-header id="site-header"></site-header>
    <mobile-navigation id="mobile-nav"></mobile-navigation>
    <main id="app-content">${pageContent}</main>
    <site-footer></site-footer>
    <back-to-top></back-to-top>
  `;

  render(shell, document.getElementById('app')!);

  window.scrollTo(0, 0);
}

function setupMobileMenu() {
  document.addEventListener('mobile-menu-toggle', () => {
    const mobileNav = document.getElementById('mobile-nav') as HTMLElement & { toggleAttribute: (name: string, force?: boolean) => boolean };
    const toggle = document.querySelector('#site-header .mobile-toggle') as HTMLElement;
    if (!mobileNav || !toggle) return;
    const isOpen = mobileNav.toggleAttribute('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.addEventListener('click', (e) => {
    const mobileNav = document.getElementById('mobile-nav');
    if (!mobileNav?.hasAttribute('open')) return;
    const target = e.target as HTMLElement;
    if (target.closest('mobile-navigation') || target.closest('.mobile-toggle')) return;
    mobileNav.removeAttribute('open');
    const toggle = document.querySelector('#site-header .mobile-toggle') as HTMLElement;
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const mobileNav = document.getElementById('mobile-nav');
      if (mobileNav?.hasAttribute('open')) {
        mobileNav.removeAttribute('open');
        const toggle = document.querySelector('#site-header .mobile-toggle') as HTMLElement;
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Open menu');
          toggle.focus();
        }
        document.body.style.overflow = '';
      }
    }
  });
}

function setupOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'mobile-nav-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(6,14,24,0.5);z-index:199;opacity:0;visibility:hidden;transition:opacity 250ms ease;';
  document.body.appendChild(overlay);

  const updateOverlay = () => {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav?.hasAttribute('open')) {
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
    } else {
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
    }
  };

  const observer = new MutationObserver(updateOverlay);
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileNav) {
    observer.observe(mobileNav, { attributes: true, attributeFilter: ['open'] });
  }

  overlay.addEventListener('click', () => {
    const nav = document.getElementById('mobile-nav');
    nav?.removeAttribute('open');
    const toggle = document.querySelector('#site-header .mobile-toggle') as HTMLElement;
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
    document.body.style.overflow = '';
  });
}

window.addEventListener('popstate', renderPage);
window.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupOverlay();
  renderPage();
});

if (document.readyState !== 'loading') {
  setupMobileMenu();
  setupOverlay();
  renderPage();
}
