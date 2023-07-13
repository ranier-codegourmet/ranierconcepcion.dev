import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { PageLinksModel } from '@/constants/menus_and_socials';
import ButtonLink from './ButtonLink';
import { useRouter } from 'next/router';
import Logo, { LogoProps } from './Logo';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { toggleIsMobileOpen } from '@/redux/reducers/project';

type NavMenuProps = {
  isMobile?: boolean;
  isMobileOpen?: boolean;
  className?: string;
  menu: PageLinksModel[];
};

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
  mobileBase: `
    dark:text-white
    text-black
    text-left
    text-3xl
    leading-loose
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
  mobileActive: `
    after:opacity-100
    hover:after:opacity-100
  `,
};

const NavMenu: FC<NavMenuProps> = (props) => {
  const { menu, className = '', isMobile, isMobileOpen } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const componentClass = twMerge(
    'menu ',
    !isMobile && 'menu--desktop hidden md:block',
    isMobile &&
      `
        menu--mobile
        md:hidden
        block
        w-[50px]
      `,
    isMobile && isMobileOpen ? 'menu--mobile-open' : 'menu--mobile-close',
    className,
  );

  const ulClass = twMerge(
    `
      menu-mobile__ul
      flex
      items-center
      justify-center
    `,
    !isMobile &&
      `
        bg-black
        bg-opacity-90
        rounded-full
        py-2
        px-4
      `,
    isMobile &&
      `
        px-4
        w-full
        flex-col
        flex-grow
        h-[calc(100%-50px)]
      `,
    className,
  );

  const liClass = (item: PageLinksModel) => {
    const isActiveMenu = router.pathname === item.href;
    return twMerge(
      isMobile ? itemClassBase.mobileBase : itemClassBase.base,
      isActiveMenu ? (isMobile ? itemClassBase.mobileActive : itemClassBase.active) : '',
    );
  };

  const toggleMenu = (forceClose = false) => {
    dispatch(toggleIsMobileOpen(forceClose ? false : !isMobileOpen));
  };

  const renderMenu = () => {
    return (
      <ul className={ulClass}>
        {[...menu].map((item, k) => (
          <>
            <li
              className={liClass(item)}
              key={`${k}-${item.name.toLowerCase().replaceAll(' ', '-')}`}
              onClick={() => toggleMenu(true)}
            >
              <Link href={item.href} className=" font-body px-4 py-2 block">
                {item.name}
              </Link>
            </li>
            {!isMobile && k !== menu.length - 1 && <span>{'/'}</span>}
          </>
        ))}
      </ul>
    );
  };

  return (
    <div className={componentClass}>
      {isMobile ? (
        <>
          <Button
            buttonStyle="MUTED"
            className="relative z-50 text-xs px-0 py-0 w-[50px] h-[50px]"
            onClick={() => toggleMenu()}
          >
            {isMobileOpen ? 'close' : 'menu'}
          </Button>
          <div
            className={twMerge(
              'z-75 menu-mobile__container absolute top-[100px] left-0 dark:bg-black bg-white w-full h-screen flex flex-col ease-in-out transition-all duration-300 max-h-[calc(100vh-100px)]',
              isMobileOpen
                ? 'menu-mobile__container--open opacity-100 visible '
                : 'menu-mobile__container--close opacity-0 invisible ',
            )}
          >
            {renderMenu()}
          </div>
        </>
      ) : (
        renderMenu()
      )}
    </div>
  );
};

export default NavMenu;
