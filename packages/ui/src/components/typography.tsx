import cn from '@repo/utils/cn';
import { PropsWithChildren } from 'react';

export interface TypographyProps extends PropsWithChildren {
  className?: string;
}

const Typography = ({ children, className }: TypographyProps) => {
  return <span className={cn(className)}>{children}</span>;
};

export default Typography;
