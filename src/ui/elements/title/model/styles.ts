import styled from 'styled-components';
import { TTitleVariant } from '@/ui/elements/title/model/types';

export const StyledTitle = styled('h1')<{ $variant: TTitleVariant }>(({
  theme,
  $variant,
}) => {
  const variant = theme.text.variants[$variant];
  return {
    ...variant,
  };
});
