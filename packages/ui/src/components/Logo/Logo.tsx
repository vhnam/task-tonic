import { LogoLarge, LogoSmall } from '../../icons';

export interface LogoProps {
  size: 'large' | 'small';
  variant: 'color' | 'white';
}

const Logo = ({ size, variant }: LogoProps) => {
  if ('large' === size) {
    return <LogoLarge variant={variant} />;
  }

  return <LogoSmall variant={variant} />;
};

export default Logo;
