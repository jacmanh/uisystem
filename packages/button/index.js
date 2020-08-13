class Button extends HTMLElement {
  constructor() {
    super();
  }
 
  connectedCallback() {
    this.innerHTML = 'mon bouton';
  }
}
window.customElements.define('ui-button', Button)