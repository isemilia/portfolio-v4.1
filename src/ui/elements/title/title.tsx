'use client';

import { TWithChildren } from '@/shared/types/components';
import { StyledTitle } from '@/ui/elements/title/model/styles';
import { TTitleVariant } from '@/ui/elements/title/model/types';

const Title: TWithChildren<{ variant?: TTitleVariant }> = ({
  children,
  variant = 'h1',
}) => {
  return <StyledTitle $variant={variant}>{children}</StyledTitle>;
};

export default Title;
