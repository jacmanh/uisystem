import styles from './style.scss'

import './menu-link/index'

class Menu extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this._style = document.createElement('style')
    this._style.textContent = styles
  }

  connectedCallback() {
    const html = document.createRange().createContextualFragment(this.render())
    this.shadowRoot.appendChild(html)
    this.shadowRoot.appendChild(this._style)
  }


  render() {
    return `
      <slot />
    `
  }
}

window.customElements.define('ui-menu', Menu)