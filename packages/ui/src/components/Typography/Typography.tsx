import cn from '@repo/utils/cn';
import type { PropsWithChildren } from 'react';
import { variantStyles } from './Typography.styles';

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

const Typography = ({ children, className, variant }: TypographyProps) => {
  return (
    <span className={cn(className, 'inline-block', variantStyles[variant])}>
      {children}
    </span>
  );
};

export default Typography;
