import { Typography } from '@/components/Typography';
import cn from '@repo/utils/cn';
import type { AllHTMLAttributes } from 'react';

export interface CheckboxProps extends AllHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <div className='flex items-center gap-2'>
      <input
        type='checkbox'
        className={cn(
          'h-[1.25rem] w-[1.25rem] rounded-[0.375rem] border-[1px] border-primary-300 border-solid [&:checked]:bg-primary-300',
        )}
        {...props}
      />{' '}
      <Typography variant='sm' className='font-medium text-greyscale-500'>
        {label}
      </Typography>
    </div>
  );
};

export default Checkbox;
