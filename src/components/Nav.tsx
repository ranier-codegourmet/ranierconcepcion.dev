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
import TriggerDarkMode from './TriggerDarkMode';

interface NavProps extends Pick<LogoProps, 'logoWidth' | 'logoWidthMobile'> {
  className?: string;
  isDarkMode: boolean;
  isMobileOpen: boolean;
}

const Nav: FC<NavProps> = (props) => {
  const { className, isDarkMode, logoWidth = 100, logoWidthMobile = 50, isMobileOpen } = props;

  return (
    <div
      className={twMerge(
        'nav fixed top-0 left-0 h-[100px] md:h-auto w-full z-50 bg-white dark:bg-black bg-opacity-90 md:bg-transparent ',
        className,
      )}
    >
      <div className="container p-2">
        <div className="row justify-between items-center py-2 flex-nowrap">
          <NavMenu menu={MENU} isMobile isMobileOpen={isMobileOpen} />
          <Logo isDarkMode={isDarkMode} logoWidth={logoWidth} logoWidthMobile={logoWidthMobile} />
          <NavMenu menu={MENU} />
          <div className="hire-me hidden md:block">
            <ButtonLink href="mailto:ranier@codegourmet.io">Hire Me !</ButtonLink>
          </div>
          <TriggerDarkMode isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
