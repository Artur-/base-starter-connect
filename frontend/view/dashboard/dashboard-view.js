import { LitElement, html } from 'lit-element';
class DashboardView extends LitElement {

    render() {
        return html`
        This is the Dashboard view
    `
    }
}

window.customElements.define('dashboard-view', DashboardView);
