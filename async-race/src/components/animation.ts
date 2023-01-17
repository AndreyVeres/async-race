import Car from './Car';
import { Store } from './Store';

function getRoadDistance(id: number) {
  const roadDistance = document.querySelector(`.road_${id}`)?.clientWidth;
  if (roadDistance) {
    return roadDistance;
  }
  return 0;
}

export default function animation(
  carImage: HTMLElement,
  velocity: number,
  distance: number,
  id: number
) {
  const racer = carImage;
  const anumationDuration = distance / velocity;
  // Car.animations[id] = 0;
  Store.animations[id] = 0;

  let startTime: number;
  let prevStartTime: number;
  let done = false;

  function step(): void {
    const currentTime = new Date().getTime();
    const roadDistance = getRoadDistance(id);

    if (!startTime) {
      startTime = currentTime;
    }

    const currentAnimationTime: number = currentTime - startTime;

    if (prevStartTime !== currentTime) {
      const passedDistance: number = (roadDistance / anumationDuration) * currentAnimationTime;
      racer.style.transform = `translateX(${passedDistance}px)`;
      if (passedDistance === roadDistance) done = true;
    }

    if (currentAnimationTime < anumationDuration) {
      prevStartTime = currentTime;

      if (!done) {
        // Car.animations[id] = window.requestAnimationFrame(step);
        Store.animations[id] = window.requestAnimationFrame(step);
      }
    }
  }

  requestAnimationFrame(step);
}
