import { uuid } from '@jacmanh/utils'
import styles from './style.scss'

class Textfield extends HTMLElement {
  constructor() {
    super()

    this._style = document.createElement('style')
    this._style.type = 'text/css'
    this._style.appendChild(document.createTextNode(styles))

    this.attachShadow({ mode: 'open' })
    this._id = `textfield-${uuid(3)}`
  }

  connectedCallback() {
    const html = document.createRange().createContextualFragment(this.render())
    this.shadowRoot.appendChild(html)
    this.shadowRoot.appendChild(this._style)

    this._input = this.shadowRoot.getElementById(this._id)

    // Init state
    this.dataset.filled = !!this.value

    // Input Events
    this._input.addEventListener('focus', e => this.onFocus())
    this._input.addEventListener('blur', e => this.onBlur())
    this._input.addEventListener('input', e => this.onChange(e))
  }

  get value() {
    return (this._input && this._input.value) || this.getAttribute('value') || ''
  }

  onFocus() {
    this.classList.add('active')
  }

  onBlur() {
    this.classList.remove('active')
  }

  onChange(e) {
    this.dataset.filled = !!e.currentTarget.value
    this.closest('FORM').dispatchEvent(
      new CustomEvent('texfieldChange', {
        detail: {
          name: e.currentTarget.name,
          value: e.currentTarget.value
        }
      })
    )
  }

  render() {
    return `
      <label for="${this._id}">
        ${this.getAttribute('label')}
      </label>
      <input
        id="${this._id}"
        type="${this.getAttribute('type') || 'text'}"
        name="${this.getAttribute('name') || ''}"
        ${this.getAttribute('disabled') ? "disabled" : ''}
        value="${this.value}"
      />
    `
  }
}
window.customElements.define('ui-textfield', Textfield)