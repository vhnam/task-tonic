import { Manrope } from 'next/font/google';
import { PropsWithChildren } from 'react';

const manropeSans = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope-sans',
});

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={manropeSans.variable}>
      <>{children}</>
    </div>
  );
};

export default Layout;
