export default class ControlPanel {
  render = () => {
    const controlsHTML = document.createElement('div');
    controlsHTML.classList.add('controls');
    controlsHTML.innerHTML = `
      <form class="create">
        <input type="text" class="create-text" name="carName">
        <input type="color" class="create-color" value="#E3B67E" name="carColor">
        <button class=" create-button">create</button>
      </form>
      <form class="update disabled">
        <input name="carName" type="text" class="update-text">
        <input name="carColor" type="color" class="update-color" value="#E3B67E">
        <input name="carId" type="hidden" class="update-id ">
        <button class="form-button update-button ">update</button>
      </form>
      <div class="controls__item">
        <button class="menu-button race-button">race</button>
        <button class="menu-button reset-button">reset</button>
        <button class="form-button generate-button">generate cars</button>
      </div>`;

    return controlsHTML;
  };
}
