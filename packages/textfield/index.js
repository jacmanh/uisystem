import { uuid } from '@jacmanh/utils'
import styles from './style.scss'

class Textfield extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style')
    this._style.type = 'text/css'
    this._style.appendChild(document.createTextNode(styles))

    this.attachShadow({ mode: 'open' })
    this._id = `textfield-`

  }

  connectedCallback() {
    const html = document.createRange().createContextualFragment(this.render())
    this.shadowRoot.appendChild(html)
    this.shadowRoot.appendChild(this._style)

    this._input = this.shadowRoot.getElementById(this._id)

    // Init state
    this.dataset.filled = !!this.getAttribute('value')

    // Input Events
    this._input.addEventListener('focus', e => this.onFocus())
    this._input.addEventListener('blur', e => this.onBlur())
    this._input.addEventListener('change', e => this.onChange(e))
  }

  get value() {
    return this.getAttribute('value') || ''
  }

  onFocus() {
    this.classList.add('active')
  }

  onBlur() {
    this.classList.remove('active')
  }

  onChange(e) {
    this.dataset.filled = !!e.currentTarget.value
    this.dispatchEvent(new CustomEvent('texfieldChange', {
      detail: {
        value: e.currentTarget.value
      }
    }))
  }

  render() {
    return `
      <label for="${this._id}">
        ${this.getAttribute('label')}
      </label>
      <input
        id="${this._id}"
        type="${this.getAttribute('type') || 'text'}"
        value="${this.value}"
      />
    `
  }
}
window.customElements.define('ui-textfield', Textfield)