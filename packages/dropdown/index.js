class Dropdown extends HTMLElement {
  constructor() {
    super();
  }
 
  connectedCallback() {
    this.innerHTML = 'A dropdown';
  }
}
window.customElements.define('ui-dropdown', Dropdown)