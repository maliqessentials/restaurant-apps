class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <ul>
        <li>Copyright © 2023 - AlMalik Ashraf</li>
        <li>Submission DIcoding Fe Expert</li>
      </ul>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
