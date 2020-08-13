class Button extends HTMLElement {
  constructor() {
    super();
 
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
 
    this.$button = this._shadowRoot.querySelector('button');
  }
 
  render() {
    this.$button.innerHTML = 'mon bouton';
  }
}