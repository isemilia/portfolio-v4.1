import { TComponent } from '@/shared/types/components';

import classes from './model/timeline-item.module.scss';
import Text from '@/ui/elements/text';
import Title from '@/ui/elements/title';
import Chip from '@/ui/elements/chip';

const TimelineItem: TComponent<
  false,
  {
    title: string;
    description: string;
    date: string;
    chips?: {
      color?: string;
      label: string;
    }[];
  }
> = ({ date, title, description, chips }) => {
  return (
    <div className={classes.root}>
      <div>
        <Text variant={'sm'}>{date}</Text>
      </div>
      <div>
        <Title component={'h3'} variant={'h3'}>
          {title}
        </Title>
        <Text variant={'sm'} className={'mt-2'}>
          {description.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Text>
        {chips && (
          <div className={classes.chips}>
            {chips.map((chip) => (
              <Chip key={chip.label} color={chip.color} size={'sm'}>
                {chip.label}
              </Chip>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
