'use client';

import {
  CSSProperties,
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

import classes from './model/banner.module.scss';
import clsx from 'clsx';
import useCreateStar from '@/ui/components/banner/utils/use-create-star';
import createGlow from '@/ui/components/banner/utils/create-glow';

const Banner: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const [dots, setDots] = useState<{ style: CSSProperties }[]>([]);

  const createStar = useCreateStar({
    fallAnimations: ['fall-1', 'fall-2', 'fall-3'].map(
      (animation) => classes[animation],
    ),
    particleClass: classes.particle,
  });

  const shineAnimations = ['shine-1', 'shine-2'];

  useEffect(() => {
    // random number from 30 to 60
    const randomNumber = Math.floor(Math.random() * (60 - 30 + 1)) + 30;

    if (bannerRef.current) {
      const dots = [];

      const width = Math.floor(bannerRef.current.offsetWidth);
      const height = Math.floor(bannerRef.current.offsetHeight);

      for (let i = 0; i <= randomNumber; i++) {
        const randomX = Math.floor(Math.random() * width);
        const randomY = Math.floor(Math.random() * height);
        const randomSize = Math.floor(Math.random() * 3) + 1;

        const randomDelay = Math.floor(Math.random() * 10);
        const randomAnimation = shineAnimations[Math.floor(Math.random() * 2)];

        dots[i] = {
          style: {
            width: randomSize,
            height: randomSize,
            top: randomY,
            left: randomX,
            animation: `${classes[randomAnimation]} 1.5s ease ${randomDelay}s infinite alternate`,
          },
        };
      }

      setDots(dots);
    }
  }, []);

  const handleMouseMove: MouseEventHandler = (e) => {
    createStar(e, bannerRef);
    createGlow(e, bannerRef, classes.glow);
  };

  return (
    <div
      ref={bannerRef}
      id="profile-banner"
      className={clsx(classes.banner, 'banner')}
      onMouseMove={handleMouseMove}
    >
      {dots.map((dot, i) => (
        <div key={i} className={classes.dot} style={dot.style}>
          <span />
        </div>
      ))}
    </div>
  );
};

export default Banner;
