import { LogoLarge, LogoSmall } from '@/icons';

export interface LogoProps {
  size: 'large' | 'small';
  variant: 'color' | 'white';
  withText?: boolean;
}

const Logo = ({ size, variant, withText = true }: LogoProps) => {
  if ('large' === size) {
    return <LogoLarge variant={variant} withText={withText} />;
  }

  return <LogoSmall variant={variant} withText={withText} />;
};

export default Logo;
