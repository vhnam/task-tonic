import {
  MenuItem as MuiMenuItem,
  type MenuItemProps as MuiMenuItemProps,
} from '@mui/base/MenuItem';
import cn from '@repo/utils/cn';
import { ReactNode } from 'react';

export type MenuItemProps = MuiMenuItemProps & {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  selected?: boolean;
};

const MenuItem = ({
  children,
  className,
  leftSection,
  rightSection,
  selected = false,
  ...props
}: MenuItemProps) => {
  return (
    <MuiMenuItem
      className={cn(
        'text-md text-greyscale-600 hover:bg-greyscale-50 hover:text-greyscale-600 active:bg-primary-0 active:text-base-primary relative mx-5 flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 font-medium transition',
        {
          "text-base-primary bg-primary-0 before:border-l-base-primary before:absolute before:bottom-0 before:left-[-20px] before:top-0 before:h-full before:rounded-r before:border-l-[5px] before:border-solid before:content-['']":
            selected,
        },
        className
      )}
      {...props}
    >
      {leftSection}
      {children}
      {rightSection}
    </MuiMenuItem>
  );
};

export default MenuItem;
