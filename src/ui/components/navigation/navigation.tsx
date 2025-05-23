'use client';

import { TComponent } from '@/shared/types/components';
import NavButton from '@/ui/elements/nav-button';
import classes from './model/navigation.module.scss';
import clsx from 'clsx';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const Navigation: TComponent<
  false,
  { links: { href: string; label: string; name: string }[] }
> = ({ className, links }) => {
  const [position, setPosition] = useState({ width: 0, left: 0 });

  const ref = useRef<null | HTMLDivElement>(null);

  const pathname = usePathname();

  const setIndicator = (offsetLeft: number, scrollWidth: number) => {
    const width = scrollWidth / 2;
    setPosition({
      width,
      left: offsetLeft + width / 2,
    });
  };

  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLAnchorElement;
    if (target) {
      setIndicator(target.offsetLeft, target.scrollWidth);
    } else {
      setPosition({ width: 0, left: 0 });
    }
  };

  useEffect(() => {
    const parent = ref.current;
    if (parent) {
      const linkName =
        pathname === '/' ? 'default' : pathname.replace(/\//, '');
      const link: HTMLAnchorElement | null = parent.querySelector(
        `.nav-${linkName}`,
      );
      if (link) {
        setIndicator(link.offsetLeft, link.scrollWidth);
      }
    }
  }, [pathname]);

  return (
    <div ref={ref} className={clsx(classes.navigation, className)}>
      <div className={classes.buttons}>
        {links.map((link) => {
          return (
            <NavButton
              key={link.name}
              href={link.href}
              isActive={pathname === link.href}
              onClick={(e) => {
                handleClick(e);
              }}
              className={`nav-${link.name}`}
            >
              {link.label}
            </NavButton>
          );
        })}
      </div>
      <div
        className={classes.indicator}
        style={{ width: position.width, left: position.left }}
      ></div>
    </div>
  );
};

export default Navigation;
