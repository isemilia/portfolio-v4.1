import { MouseEvent as ReactMouseEvent, RefObject, useRef } from 'react';
import { TUseCreateStarArgs } from '@/ui/components/banner/utils/use-create-star/model/types';

const makeStarSvg = ({ color = '#FFFFFF', size = 26 }) =>
  `<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m21.137 11.519-2.726-.779a7.453 7.453 0 0 1-5.151-5.151l-.779-2.726a.52.52 0 0 0-.962 0l-.779 2.726a7.453 7.453 0 0 1-5.151 5.151l-2.726.779a.5.5 0 0 0 0 .962l2.726.779a7.453 7.453 0 0 1 5.151 5.151l.779 2.726a.5.5 0 0 0 .962 0l.779-2.726a7.453 7.453 0 0 1 5.151-5.151l2.726-.779a.5.5 0 0 0 0-.962z" fill="${color}" opacity="1" data-original="#000000" class=""></path></g></svg>`;

const useCreateStar = ({
  fallAnimations,
  particleClass,
  colors = ['#FFF'],
  spawnDistance = 70,
  size = 26,
}: TUseCreateStarArgs) => {
  const prevPosition = useRef({ x: 0, y: 0 });

  return (e: ReactMouseEvent, parentRef: RefObject<HTMLDivElement | null>) => {
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const dx = x - prevPosition.current.x;
    const dy = y - prevPosition.current.y;
    const moved = Math.sqrt(dx * dx + dy * dy);

    if (moved < spawnDistance || !parentRef.current) return;

    const color = colors[Math.floor(Math.random() * colors.length)];
    const animation =
      fallAnimations[Math.floor(Math.random() * fallAnimations.length)];

    const particle = document.createElement('div');
    particle.classList.add(particleClass);
    particle.innerHTML = makeStarSvg({ color, size });

    Object.assign(particle.style, {
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
      animation: `${animation} 1.5s ease`,
      animationFillMode: 'forwards',
    });

    parentRef.current.appendChild(particle);

    setTimeout(() => {
      parentRef.current?.removeChild(particle);
    }, 1000);

    prevPosition.current = { x, y };
  };
};

export default useCreateStar;
