import { MouseEvent as ReactMouseEvent, MutableRefObject } from 'react';

const makeStarSvg = ({ color = '#FFFFFF', size = 26 }) =>
  `<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m21.137 11.519-2.726-.779a7.453 7.453 0 0 1-5.151-5.151l-.779-2.726a.52.52 0 0 0-.962 0l-.779 2.726a7.453 7.453 0 0 1-5.151 5.151l-2.726.779a.5.5 0 0 0 0 .962l2.726.779a7.453 7.453 0 0 1 5.151 5.151l.779 2.726a.5.5 0 0 0 .962 0l.779-2.726a7.453 7.453 0 0 1 5.151-5.151l2.726-.779a.5.5 0 0 0 0-.962z" fill="${color}" opacity="1" data-original="#000000" class=""></path></g></svg>`;

const useCreateStar = ({
  fallAnimations,
  particleClass,
}: {
  fallAnimations: string[];
  particleClass: string;
}) => {
  let prevX = 0;
  let prevY = 0;

  const colors = ['#AC75FF', '#FF67D5', '#FF9F74', '#F9F871'];

  return (
    e: ReactMouseEvent,
    parentRef: MutableRefObject<HTMLDivElement | null>,
  ) => {
    const currX = e.nativeEvent.offsetX;
    const currY = e.nativeEvent.offsetY;

    const deltaX = currX - prevX;
    const deltaY = currY - prevY;
    const distanceMoved = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const spawnDistanceThreshold = 70;

    if (parentRef.current && distanceMoved >= spawnDistanceThreshold) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomAnimation =
        fallAnimations[Math.floor(Math.random() * fallAnimations.length)];

      const particle = document.createElement('div');
      particle.classList.add(particleClass || 'particle');
      particle.innerHTML = makeStarSvg({ color: randomColor });

      particle.style.position = 'absolute';
      particle.style.top = currY + 'px';
      particle.style.left = currX + 'px';
      particle.style.animation = `${randomAnimation} 1.5s ease 0s`;
      particle.style.animationFillMode = 'forwards';

      parentRef.current.appendChild(particle);

      setTimeout(() => {
        if (parentRef.current) {
          parentRef.current.removeChild(particle);
        }
      }, 1000);

      prevX = currX;
      prevY = currY;
    }
  };
};

export default useCreateStar;
