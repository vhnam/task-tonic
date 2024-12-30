import cn from '@repo/utils/cn';
import { PropsWithChildren } from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs';

export interface TypographyProps extends PropsWithChildren {
  className?: string;
  variant: TypographyVariant;
}

const variantStyles = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-h4',
  h5: 'text-h5',
  h6: 'text-h6',
  lg: 'text-lg',
  md: 'text-md',
  sm: 'text-sm',
  xs: 'text-xs',
};

const Typography = ({ children, className, variant }: TypographyProps) => {
  return (
    <span className={cn(className, 'inline-block', variantStyles[variant])}>
      {children}
    </span>
  );
};

export default Typography;
