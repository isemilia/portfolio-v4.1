import icon from '@/shared/assets/img/mantine-icon.png';
import { TComponent } from '@/shared/types/components';
import clsx from 'clsx';

const MantineIcon: TComponent = ({ className, ...props }) => {
  return (
    <img
      src={icon.src}
      alt="Mantine UI icon"
      width={20}
      height={20}
      className={clsx(className)}
      {...props}
    />
  );
};

export default MantineIcon;
