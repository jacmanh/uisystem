import styles from './style.scss'


class Icon extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this._style = document.createElement('style')
    this._style.textContent = styles
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this._style)
    this.classList.add('icon', `icon-${this.iconName}`)

  }

  get iconName() {
    return this.getAttribute('name') || null
  }
}

window.customElements.define('ui-icon', Icon)