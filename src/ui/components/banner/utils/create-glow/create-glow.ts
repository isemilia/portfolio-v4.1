import { MouseEvent as ReactMouseEvent, MutableRefObject } from 'react';

const createGlow = (
  e: ReactMouseEvent,
  parentRef: MutableRefObject<HTMLDivElement | null>,
  glowClass?: string,
) => {
  const glow = document.createElement('div');
  glow.className = glowClass || 'glow';
  glow.style.top = e.nativeEvent.offsetY + 'px';
  glow.style.left = e.nativeEvent.offsetX + 'px';

  if (parentRef.current) {
    parentRef.current.appendChild(glow);
  }

  setTimeout(() => {
    if (parentRef.current) {
      parentRef.current.removeChild(glow);
    }
  }, 100);
};

export default createGlow;
