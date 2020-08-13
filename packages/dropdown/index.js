import styles from './style.scss'

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(styles));

class Dropdown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = '<div>Coucou</div>'
    this.shadowRoot.appendChild(style);
  }
}
window.customElements.define('ui-dropdown', Dropdown)