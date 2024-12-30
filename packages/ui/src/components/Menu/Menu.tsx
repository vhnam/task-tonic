import {
  Menu as MuiMenu,
  type MenuProps as MuiMenuProps,
} from '@mui/base/Menu';
import cn from '@repo/utils/cn';

export type MenuProps = MuiMenuProps;

const Menu = ({ className, ...props }: MenuProps) => {
  return (
    <MuiMenu
      slotProps={{
        listbox: { className: cn('flex flex-col gap-3', className) },
      }}
      {...props}
    />
  );
};

export default Menu;
