import { Button as MuiButton } from '@mui/base/Button';
import cn from '@repo/utils/cn';
import { PropsWithChildren } from 'react';
import { sizeStyles, variantStyles } from './Button.styles';

export interface ButtonProps extends PropsWithChildren {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'stroke' | 'ghost' | 'disabled';
}

const Button = ({
  children,
  className,
  size = 'md',
  variant = 'primary',
}: ButtonProps) => {
  return (
    <MuiButton
      className={cn(
        `${variantStyles[variant]} ${sizeStyles[size]} rounded-[6.25rem] font-medium transition`,
        className
      )}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
