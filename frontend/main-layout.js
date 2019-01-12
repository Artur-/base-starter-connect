import { LitElement, html } from 'lit-element';
import './main-navigation.js'
import '@vaadin/vaadin-app-layout'

class MainLayout extends LitElement {

    render() {
        return html`
        <vaadin-app-layout>
            <main-navigation slot="menu"></main-navigation>
            <slot></slot>
        </vaadin-app-layout>
    `
    }
}



window.customElements.define('main-layout', MainLayout);
