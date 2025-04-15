'use client';

import { TComponent } from '@/shared/types/components';
import FilterIcon from '@/ui/elements/icons/filter-icon';
import Chip from '@/ui/elements/chip';
import clsx from 'clsx';
import { useState } from 'react';
import { TFilterProps } from '@/ui/components/filters/model/types';

const Filters: TComponent<false, TFilterProps> = ({
  options,
  className,
  defaultValue,
  onChange,
}) => {
  const [current, setCurrent] = useState(defaultValue);

  return (
    <div className={clsx('flex items-center gap-[14px]', className)}>
      <FilterIcon />
      {options.map((filter) => {
        return (
          <Chip
            key={filter.name}
            className={'cursor-pointer'}
            variant={'outlined'}
            onClick={() => {
              setCurrent(filter.name);
              onChange?.(filter);
            }}
            color={current !== filter.name ? 'neutral' : 'primary'}
          >
            {filter.label}
          </Chip>
        );
      })}
    </div>
  );
};

export default Filters;
