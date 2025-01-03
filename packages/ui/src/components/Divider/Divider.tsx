import cn from '@repo/utils/cn';
import type { PropsWithChildren } from 'react';
import { positionStyles } from './Divider.styles';

export interface DividerProps extends PropsWithChildren {
  className?: string;
  position?: 'left' | 'center' | 'right';
}

const Divider = ({
  children,
  className,
  position = 'center',
}: DividerProps) => {
  return (
    <div
      className={cn(
        `${positionStyles[position]} flex shrink-0 items-center before:self-center before:border-greyscale-400 before:border-t before:content-[''] after:self-center after:border-greyscale-400 after:border-t after:content-['']`,
        className,
      )}
    >
      {children && <span className='px-4'>{children}</span>}
    </div>
  );
};

export default Divider;
