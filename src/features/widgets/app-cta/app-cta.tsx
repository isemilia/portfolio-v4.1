'use client';

import { TComponent } from '@/shared/types/components';
import Cta from '@/ui/components/cta';
import toast from 'react-hot-toast';

const AppCta: TComponent = ({ className }) => {
  return (
    <Cta
      title={'Got an idea?'}
      button={{
        label: "Let's chat!",
        onClick: () => {
          navigator.clipboard.writeText('emiliaoffice@yandex.com').then(() => {
            toast.success('Email address copied!');
          });
        },
      }}
      className={className}
    />
  );
};

export default AppCta;
