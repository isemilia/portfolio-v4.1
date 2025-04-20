import classes from './model/project.module.scss';
import ExternalLinkIcon from '@/ui/elements/icons/external-link-icon';
import Title from '@/ui/elements/title';
import Text from '@/ui/elements/text';
import Chip from '@/ui/elements/chip';
import AppLink from '@/ui/elements/app-link';
import { TComponent } from '@/shared/types/components';
import { TProjectProps } from '@/ui/components/project/model/types';
import getLinkIcon from '@/shared/utils/functions/get-link-type';
import clsx from 'clsx';
import Image from 'next/image';

const Project: TComponent<false, TProjectProps> = ({
  img,
  title,
  description,
  href,
  chips = [],
  links = [],
  className,
}) => {
  return (
    <div className={clsx(classes.project, className)}>
      <div className={classes.thumbnail}>
        <Image
          src={img}
          alt={'Project'}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 180px"
        />
      </div>
      <div>
        <Title variant={'h3'} component={'h3'} className={classes.title}>
          <a href={href} target={'_blank'}>
            {title}
          </a>
          <ExternalLinkIcon />
        </Title>
        <Text component={'div'} variant={'sm'} className={'mt-1'}>
          {description}
        </Text>
        <div className={classes.chips}>
          {chips.map((chip, i) => (
            <Chip key={i} size={'sm'} color={chip.color}>
              {chip.label}
            </Chip>
          ))}
        </div>
        <div className={classes.links}>
          {links.map((link, i) => (
            <AppLink
              key={i}
              textSize={'sm'}
              iconSize={'xs'}
              icon={getLinkIcon(link.type)}
              iconPosition={'right'}
              href={link.href}
              target={'_blank'}
            >
              {link.label}
            </AppLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
