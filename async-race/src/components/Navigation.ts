export default class Navigation {
  render = () => {
    const headerNavigationHTML = document.createElement('div');
    headerNavigationHTML.classList.add('navigation');
    headerNavigationHTML.innerHTML = `
      <a href="#/">to garage</a>
      <a href="#/winners">to winners</a>
    `;
    return headerNavigationHTML;
  };
}
