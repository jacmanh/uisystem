import styles from './style.scss'

class Button extends HTMLElement {
  constructor() {
    super()

    this._style = document.createElement('style')
    this._style.textContent = styles

    this.attachShadow({ mode: 'open' })
  }
 
  connectedCallback() {
    const html = document.createRange().createContextualFragment(this.render())
    this.shadowRoot.appendChild(html)
    this.shadowRoot.appendChild(this._style)
  }

  render() {
    return `
      <button><slot></slot></button>
    `
  }
}
window.customElements.define('ui-button', Button)