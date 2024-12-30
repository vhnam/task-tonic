import Apple from '../icons/apple.js';
import Google from '../icons/google.js';
import Button, { ButtonProps } from './button.js';

export type SocialButtonProps = Omit<ButtonProps, 'variant'> & {
  variant: 'apple' | 'google';
};

const SocialButton = ({ children, variant, ...props }: SocialButtonProps) => {
  const icon = 'apple' === variant ? <Apple /> : <Google />;

  return (
    <Button
      {...props}
      className="border-greyscale-100 hover:bg-greyscale-100 flex w-full items-center justify-center gap-3 border-[1px] border-solid bg-transparent"
    >
      {icon}
      {children}
    </Button>
  );
};

export default SocialButton;
