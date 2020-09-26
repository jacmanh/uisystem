import styles from './style.scss'
import { uuid } from '@jacmanh/utils'

class Checkbox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this._style = document.createElement('style')
    this._style.textContent = styles

    const html = document.createRange().createContextualFragment(this.render())
    this.shadowRoot.appendChild(html)
    this.shadowRoot.appendChild(this._style)

  }

  connectedCallback() {
    this.inputId = `checkbox-${uuid(3)}`

    this._wrapper = this.shadowRoot.querySelector('.checkbox')
    this._input = this.shadowRoot.querySelector('input')
    this._label = this.shadowRoot.querySelector('label')

    this.classList.add('checkbox')
    // Add "for" attributes
    this._input.setAttribute('id', this.inputId)
    this._label.setAttribute('for', this.inputId)

    this._input.addEventListener('change', this.onChange.bind(this))
  }

  get isChecked() {
    return this._input.checked
  }

  set isChecked(value) {
    this.classList.toggle('checked', value)
  }

  onChange(event) {
    this.isChecked = event.currentTarget.checked
  }

  render() {
    return `
      <label>Remember me</label>  
      <input type="checkbox" />
    `
  }
}

window.customElements.define('ui-checkbox', Checkbox)