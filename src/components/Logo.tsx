import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { toggleIsMobileOpen } from '@/redux/reducers/project';
import { useDispatch } from 'react-redux';

export type LogoProps = {
  isDarkMode: boolean;
  className?: string;
  logoWidth?: number;
  logoWidthMobile?: number;
};

const Logo: FC<LogoProps> = (props) => {
  const { isDarkMode = true, className = '', logoWidth = 250, logoWidthMobile = 50 } = props;
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleIsMobileOpen(false));
  };

  const src = isDarkMode ? '/logo-dark-bg.png' : '/logo-light-bg.png';
  const srcMobile = isDarkMode ? '/logo-dark-bg-small.png' : '/logo-light-bg-small.png';

  return (
    <Link href="/" className={twMerge(`logo w-[${logoWidth}px] block`, className)} onClick={toggleMenu}>
      <Image
        className="hidden md:block"
        src={src}
        alt="joseadrianbuctuanon.dev"
        width={logoWidth}
        height={logoWidth / 3}
      />
      <Image
        className="block md:hidden"
        src={srcMobile}
        alt="joseadrianbuctuanon.dev"
        width={logoWidthMobile}
        height={logoWidthMobile}
      />
    </Link>
  );
};

export default Logo;
