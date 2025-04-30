
/**
 * Copyright 2025 MSchwin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';

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
        
      }
      .wrapper {
        
        
       
        

      }
      h3 span {
        font-size: var(--portfolio-sidebar-theme-label-font-size, var(--ddd-font-size-s));
      }
      .sidebar{  
        
        
        
        
        
      }
      .sidebar a {
        display: flex;
        flex-direction: column;
      padding: 15px;
      text-decoration: none;
      color: white;
      
    
    
    }
    .sidebar scroll-button{
      margin-left: 30%;
      

    }
    
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
<div class="sidebar">
  <a href="#s-1" >Home </a>
  <a href="#s-2" >About</a>
  <a href="#s-3" >Services</a>
  <a href="#s-4" >Apply</a>
  <a href="#s-5" >Contact </a>
  <br>
  <scroll-button></scroll-button>
 
  </div>
</div>`;
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
