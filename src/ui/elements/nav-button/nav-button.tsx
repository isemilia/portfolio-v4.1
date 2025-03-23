import { TComponent } from '@/shared/types/components';
import classes from './model/nav-button.module.scss';
import Link from 'next/link';
import { ComponentProps, forwardRef, MouseEventHandler, Ref } from 'react';
import clsx from 'clsx';

const NavButton: TComponent<
  true,
  {
    href: ComponentProps<typeof Link>['href'];
    isActive?: boolean;
    onClick?: MouseEventHandler;
  }
> = forwardRef(
  (
    { href, children, isActive, onClick, className },
    ref: Ref<HTMLAnchorElement>,
  ) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={clsx(classes.button, isActive && classes.active, className)}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  },
);

NavButton.displayName = 'NavButton';

export default NavButton;
