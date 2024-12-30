import { Button as MuiButton } from '@mui/base/Button';
import cn from '@repo/utils/cn';
import { PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'stroke' | 'ghost' | 'disabled';
}

const variantStyles = {
  primary: 'bg-primary-300 hover:bg-primary-200 active:bg-base-background',
  secondary: 'bg-primary-300',
  stroke: 'bg-primary-300',
  ghost: 'bg-primary-300',
  disabled: 'bg-greyscale-50',
};

const sizeStyles = {
  sm: 'py-[0.625rem] px-[0.75rem] text-sm',
  md: 'p-[0.75rem] text-sm',
  lg: 'py-[0.875rem] px-6 text-md',
};

const Button = ({
  children,
  className,
  size = 'md',
  variant = 'primary',
}: ButtonProps) => {
  return (
    <MuiButton
      className={cn(
        `${variantStyles[variant]} ${sizeStyles[size]} text-additional-white rounded-[6.25rem] font-medium`,
        className
      )}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
