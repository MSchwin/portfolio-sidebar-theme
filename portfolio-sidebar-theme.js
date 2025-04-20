/**
 * Copyright 2025 MSchwin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
   
    
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-sidebar-theme.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: flex;
        color: var(--ddd-theme-default-nittanyNavy);
        background-color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-navigation);
        height: 900px;
       
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-sidebar-theme-label-font-size, var(--ddd-font-size-s));
      }
      .sidebar{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: white;
      }
      .sidebar a {
      padding: 15px;
      text-decoration: none;
      color: white;
    }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
<div class="sidebar">
  <a @click=${() => this._showScreen('home')}>Home</a>
  <a @click=${() => this._showScreen('about')}>About</a>
  <a @click=${() => this._showScreen('services')}>Services</a>
  <a @click=${() => this._showScreen('contact')}>Contact</a>
  </div>
</div>`;
  }
  _showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
  
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
    }
  }
  

 

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);