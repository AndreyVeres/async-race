export default class PageButtons {
  render = () => {
    const pageButtonsHTML = document.createElement('div');
    pageButtonsHTML.classList.add('page__buttons');
    pageButtonsHTML.innerHTML = `
      <button class="prev">prev</button>
      <button class="next">next</button>
    `;

    return pageButtonsHTML;
  };
}
