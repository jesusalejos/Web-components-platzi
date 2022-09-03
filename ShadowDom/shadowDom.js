class myShadowDom extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
        <section>
          <h2 class="title">Hola mundo!</h2>
          <div>
            <p>Soy más texto ejemplo</p>
            <p>Other, this was create for me too</p>
          </div>
        </section>
        ${this.getStyles()}
      `;
      return template;
    }
    getStyles() {
      return `
        <style>
          h2 {
            color: red;
          }
        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
      this.render();
    }
  }
  customElements.define("my-shadow", myShadowDom);