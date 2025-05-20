'use client';

import { TComponent } from '@/shared/types/components';
import FilterIcon from '@/ui/elements/icons/filter-icon';
import Chip from '@/ui/elements/chip';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { TFilterProps } from '@/ui/components/filters/model/types';

const Filters: TComponent<false, TFilterProps> = ({
  options,
  className,
  defaultValue,
  onChange,
  value,
}) => {
  const [current, setCurrent] = useState(defaultValue);

  useEffect(() => {
    if (value) {
      setCurrent(value);
    }
  }, [value]);

  return (
    <div
      className={clsx(
        'grid grid-cols-[20px_1fr] items-center gap-[14px] -mr-6 lg:mr-0',
        className,
      )}
    >
      <FilterIcon />
      <div className={'flex items-center gap-[14px] overflow-auto max-w-full'}>
        {options.map((filter) => {
          return (
            <Chip
              key={filter.name}
              className={'cursor-pointer'}
              variant={'outlined'}
              onClick={() => {
                if (!value) {
                  setCurrent(filter.name);
                }

                onChange?.(filter);
              }}
              color={current !== filter.name ? 'neutral' : 'primary'}
            >
              {filter.label}
            </Chip>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
