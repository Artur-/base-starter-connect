import { LitElement, html } from 'lit-element';
class OrdersView extends LitElement {
    render() {
        return html`
        This is the Orders view
    `
    }
}

window.customElements.define('orders-view', OrdersView);
