import { LitElement, html } from 'lit-element';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-icons'
import { router } from './index.js';

class MainNavigation extends LitElement {

  render() {
    const mainLayoutRoute = router.getRoutes()[0];
    const menuItems = router.getRoutes()[0].children.filter(r => r.title);
    // FIXME Menu highlighting
    const selectedPageIndex = -1;

    return html`
      <vaadin-tabs selected="${selectedPageIndex}">
        ${menuItems.map(item => html`
        <a href="${router.urlForPath(item.path)}">
          <vaadin-tab theme="icon-on-top">
            <span>${item.title}</span>
          </vaadin-tab>
        </a>
        `)}
      </vaadin-tabs>
    `
  }
}

window.customElements.define('main-navigation', MainNavigation);
