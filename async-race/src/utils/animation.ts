import { Store } from '../store/Store';

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

  Store.animations[id] = {
    time: 0,
    frame: 0,
  };

  let startTime: number;
  let prevStartTime: number;

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
    }

    if (currentAnimationTime < anumationDuration) {
      prevStartTime = currentTime;

      Store.animations[id] = {
        time: currentAnimationTime,
        frame: window.requestAnimationFrame(step),
      };
    }
  }

  requestAnimationFrame(step);
}
