class MenuLink extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {}
}

window.customElements.define('ui-menu-link', MenuLink)