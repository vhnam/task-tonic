import { Button, type ButtonProps } from '@/components/Button';
import { Apple, Google } from '@/icons';

export type SocialButtonProps = Omit<ButtonProps, 'variant'> & {
  variant: 'apple' | 'google';
};

const SocialButton = ({ children, variant, ...props }: SocialButtonProps) => {
  const icon = 'apple' === variant ? <Apple /> : <Google />;

  return (
    <Button
      {...props}
      className='flex w-full items-center justify-center gap-3 border border-greyscale-100 border-solid bg-transparent hover:bg-greyscale-100'
    >
      {icon}
      {children}
    </Button>
  );
};

export default SocialButton;
