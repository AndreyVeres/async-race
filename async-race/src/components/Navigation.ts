export default class Navigation {
  render = () => {
    const headerNavigationHTML = document.createElement('div');
    headerNavigationHTML.classList.add('navigation');
    headerNavigationHTML.innerHTML = `
      <a href="#/" class="nav-link">to garage</a>
      <a href="#/winners" class="nav-link">to winners</a>
    `;
    return headerNavigationHTML;
  };
}
