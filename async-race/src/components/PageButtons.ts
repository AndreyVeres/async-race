export default class PageButtons {
  render = () => {
    const pageButtonsHTML = document.createElement('div');
    pageButtonsHTML.classList.add('page__buttons');
    pageButtonsHTML.innerHTML = `
      <button class="page-button prev">prev</button>
      <button class="page-button next">next</button>
    `;

    return pageButtonsHTML;
  };
}
