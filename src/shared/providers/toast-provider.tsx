'use client';

import { TComponent } from '@/shared/types/components';
import { Toaster } from 'react-hot-toast';
import colors from '@/shared/theme/colors.module.scss';

const ToastProvider: TComponent<true> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster
        position={'bottom-right'}
        toastOptions={{
          duration: 1500,
          style: {
            background: colors.backgroundElevated,
            color: colors.textMain,
            boxShadow: 'none',
          },
        }}
      />
    </>
  );
};

export default ToastProvider;
