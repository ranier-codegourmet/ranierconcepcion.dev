import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { MENU } from '@/constants/menus_and_socials';
import ButtonLink from './ButtonLink';
import { useRouter } from 'next/router';
import Logo, { LogoProps } from './Logo';
import NavMenu from './NavMenu';
import Button from './Button';

interface NavProps extends Pick<LogoProps, 'logoWidth' | 'logoWidthMobile'> {
  className?: string;
  darkMode?: boolean;
}

const itemClassBase = {
  base: `
    text-white
    text-center
    relative
    min-w-[120px]
    after:content-['']
    after:pointer-events-none
    after:absolute
    after:top-full
    after:left-0
    after:block
    after:w-full
    after:h-1
    after:transition-all
    after:opacity-0
    after:bg-gradient-to-r
    after:from-transparent
    after:from-10%
    after:via-white
    after:via-50%
    after:to-transparent
    after:to-90%
    after:scale-x-[.8]
    hover:after:opacity-50
    hover:after:scale-x-100
  `,
  active: `
    after:opacity-100
    hover:after:opacity-100
  `,
};

const Nav: FC<NavProps> = (props) => {
  const { className, darkMode, logoWidth = 250, logoWidthMobile = 50 } = props;
  const router = useRouter();
  return (
    <div
      className={twMerge(
        'nav fixed top-0 left-0 h-auto w-full z-50 bg-black bg-opacity-90 md:bg-transparent ',
        className,
      )}
    >
      <div className="container p-2">
        <div className="row justify-between items-center py-2 flex-nowrap">
          <NavMenu menu={MENU} isMobile />
          <Logo isDark={darkMode} logoWidth={logoWidth} logoWidthMobile={logoWidthMobile} />
          <NavMenu menu={MENU} />
          <div className="hire-me hidden md:block">
            <ButtonLink href="mailto:jose@codegourmet.io">Hire Me !</ButtonLink>
          </div>
          <div className="hire-me">
            <Button buttonStyle="MUTED" className="text-xs px-0 py-0 w-[50px] h-[50px]">
              light
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
