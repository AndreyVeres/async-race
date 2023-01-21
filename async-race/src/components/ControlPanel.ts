import { Store } from '../store/Store';

export default class ControlPanel {
  render = () => {
    const controlsHTML = document.createElement('div');
    controlsHTML.classList.add('controls');
    controlsHTML.innerHTML = `
      <form class="create">
        <input value="${Store.createInput}" type="text" class="create-text" name="carName">
        <input type="color" class="create-color" value="#E3B67E" name="carColor">
        <button class="green create-button">create</button>

      </form>
      <form class="update disabled">
        <input value="${Store.updateInput}" name="carName" type="text" class="update-text">
        <input name="carColor" type="color" class="update-color" value="#E3B67E">
        <input name="carId" type="hidden" class="update-id ">
        <button class="green form-button update-button ">update</button>
      </form>
      <div class="controls__item">
        <button class="green race-button">race</button>
        <button class="red reset-button">reset</button>
        <button class="yellow generate-button">generate cars</button>
      </div>`;
    return controlsHTML;
  };
}
