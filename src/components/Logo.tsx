import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export type LogoProps = {
  isDark?: boolean;
  className?: string;
  logoWidth?: number;
  logoWidthMobile?: number;
};

const Logo: FC<LogoProps> = (props) => {
  const { isDark = true, className = '', logoWidth = 250, logoWidthMobile = 50 } = props;

  const src = isDark ? '/logo-dark-bg.png' : '/logo-light-bg.png';
  const srcMobile = isDark ? '/logo-dark-bg-small.png' : '/logo-dark-bg-small.png';

  return (
    <Link href="/" className={twMerge(`logo w-[${logoWidth}px] block`, className)}>
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
