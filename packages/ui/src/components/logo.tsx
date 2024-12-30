import LogoLarge from '../icons/logoLarge.js';
import LogoSmall from '../icons/logoSmall.js';

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
