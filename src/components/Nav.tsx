import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { twMerge } from 'tailwind-merge';

type NavProps = {
  className?: string;
  darkMode?: boolean;
  logoWidth?: number;
};

type MenuListProps = {
  name: string;
  href: string;
  isExternal?: boolean;
  isActive?: boolean;
};

const MENU: MenuListProps[] = [
  {
    name: 'Home',
    href: '/',
    isActive: true,
  },
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Works',
    href: '/',
  },
  {
    name: 'Contact',
    href: '/',
  },
];

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
  const { className, darkMode, logoWidth = 250 } = props;

  return (
    <div className="nav fixed top-0 left-0 h-auto w-full z-50">
      <div className="container">
        <div className="row justify-between items-center py-2">
          <div className={`logo w-[${logoWidth}px]`}>
            <Image src="/logo-dark.png" alt="joseadrianbuctuanon.dev" width={logoWidth} height={logoWidth / 3} />
          </div>
          <div className="menu">
            <ul className="flex items-center bg-black bg-opacity-90 rounded-full py-2 px-4">
              {[...MENU].map((item, k) => (
                <>
                  <li
                    className={twMerge(itemClassBase.base, item.isActive ? itemClassBase.active : '')}
                    key={`${k}-${item.name.toLowerCase().replaceAll(' ', '-')}`}
                  >
                    <Link
                      href={item.name}
                      className={`
                    font-body
                    px-4
                    py-2
                    block
                  `}
                    >
                      {item.name}
                    </Link>
                  </li>
                  {k !== MENU.length - 1 && <span>{'/'}</span>}
                </>
              ))}
            </ul>
          </div>
          <div className="hire-me">
            <Button>Hire Me !</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
