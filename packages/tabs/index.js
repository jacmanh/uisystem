import styles from './style.scss'

class Tabs extends HTMLElement {
  constructor() {
    super()

    this._style = document.createElement('style')
    this._style.textContent = styles

    this.attachShadow({ mode: 'open' })

    const html = document.createRange().createContextualFragment(this.render())
    this.shadowRoot.appendChild(html)
    this.shadowRoot.appendChild(this._style)
  }
 
  connectedCallback() {
    let tabsSlot = this.shadowRoot.querySelector('#tabsSlot')
    let panelsSlot = this.shadowRoot.querySelector('.panels slot')

    this.tabs = tabsSlot.assignedElements({ flatten: true })
    this.panels = panelsSlot.assignedElements({ flatten: true });

    // Add aria role="tabpanel" to each content panel.
    if (this.panels) {
      for (let [i, panel] of this.panels.entries()) {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('tabindex', 0);
      }
    }
    // Add attributes to tabs
    for (let [i, tab] of this.tabs.entries()) {
      tab.setAttribute('role', 'tab');
    }

    tabsSlot.addEventListener('click', this._onTabClick.bind(this));

    this.selected = this._getSelectedTab() || 0;
  }

  get selected() {
    return this.selected;
  }

  set selected(index) {
    this._selectTab(index);
    this.setAttribute('selected', index);
  }

  _getSelectedTab() {
    const index = this.tabs.findIndex(tab => tab.hasAttribute('data-selected'))
    return index >= 0 ? index : null
  }

  _onTabClick(e) {
    if (e.target.slot === 'tab') {
      this.selected = this.tabs.indexOf(e.target);
      e.target.focus();
    }
  }

  _selectTab(index = null) {
    for (let i = 0, tab; tab = this.tabs[i]; ++i) {
      let select = i === index;
      tab.setAttribute('tabindex', select ? 0 : -1);
      tab.setAttribute('aria-selected', select);
      this.panels[i].setAttribute('aria-hidden', !select);
    }
  }

  render() {
    return `
      <div class="tabs">
        <slot id="tabsSlot" name="tab"></slot>
      </div>
      <div class="panels">
        <slot></slot>
      </div>
    `
  }
}
window.customElements.define('ui-tabs', Tabs)