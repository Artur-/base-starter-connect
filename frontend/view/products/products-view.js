import { LitElement, html } from 'lit-element';
class ProductsView extends LitElement {
    render() {
        return html`
        This is the Products view
    `
    }
}

window.customElements.define('products-view', ProductsView);
