import icon from '@/shared/assets/img/postgresql-icon.png';
import { TComponent } from '@/shared/types/components';
import clsx from 'clsx';

const PostgreSQLIcon: TComponent = ({ className, ...props }) => {
  return (
    <img
      src={icon.src}
      alt="PostgreSQL icon"
      width={20}
      height={20}
      className={clsx(className)}
      {...props}
    />
  );
};

export default PostgreSQLIcon;
