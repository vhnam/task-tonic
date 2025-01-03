import cn from '@repo/utils/cn';
import type { PropsWithChildren } from 'react';

export interface DrawerProps extends PropsWithChildren {
  className?: string;
}

const Drawer = ({ children, className }: DrawerProps) => {
  return (
    <div
      className={cn(
        className,
        'border-r border-r-greyscale-100 border-solid py-5',
      )}
    >
      {children}
    </div>
  );
};

export default Drawer;
