import { PropsWithChildren } from 'react';
import { positionStyles } from './Divider.styles';

export interface DividerProps extends PropsWithChildren {
  position?: 'left' | 'center' | 'right';
}

const Divider = ({ children, position = 'center' }: DividerProps) => {
  return (
    <div
      className={`${positionStyles[position]} before:border-greyscale-400 after:border-greyscale-400 flex shrink-0 items-center before:self-center before:border-t before:content-[''] after:self-center after:border-t after:content-['']`}
    >
      <span className="px-4">{children}</span>
    </div>
  );
};

export default Divider;