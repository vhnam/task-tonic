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
      className="border-greyscale-100 hover:bg-greyscale-100 flex w-full items-center justify-center gap-3 border border-solid bg-transparent"
    >
      {icon}
      {children}
    </Button>
  );
};

export default SocialButton;
