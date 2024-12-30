import { AllHTMLAttributes } from 'react';
import Typography from './typography.js';
import cn from '@repo/utils/cn';

export interface CheckboxProps extends AllHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className={cn(
          'border-primary-300 h-[1.25rem] w-[1.25rem] rounded-[0.375rem] border-[1px] border-solid [&:checked]:bg-primary-300'
        )}
        {...props}
      />{' '}
      <Typography variant="sm" className="text-greyscale-500 font-medium">
        {label}
      </Typography>
    </div>
  );
};

export default Checkbox;
