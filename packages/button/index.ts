import styles from './style.scss'

class Button extends HTMLElement {
  _style: HTMLStyleElement

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

    this.onclick = () => {
      if (this.type === 'submit') {
        this.closest('FORM').dispatchEvent(new Event('submit', { cancelable: true }))
      }
    }
  }

  get type() {
    if (this.hasAttribute('submit')) {
      return 'submit'
    }
    return ''
  }

  render() {
    return `
      <button 
        type="${this.type}"
        ${this.getAttribute('disabled') ? 'disabled' : ''}
      >
        <slot></slot>
      </button>
    `
  }
}
window.customElements.define('ui-button', Button)