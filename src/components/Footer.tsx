import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { twMerge } from 'tailwind-merge';
import { SOCIALS } from '@/constants/menus_and_socials';

type FooterProps = {
  className?: string;
  darkMode?: boolean;
  logoWidth?: number;
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
};

const Footer: FC<FooterProps> = (props) => {
  const { className, darkMode, logoWidth = 250 } = props;

  const componentClass = 'footer-section w-full bg-black py-10';
  return (
    <div className={twMerge(componentClass, className)}>
      <div className="container">
        <div className="row justify-between items-center py-2 flex-col md:flex-row">
          <Link href="/" className={`logo w-[${logoWidth}px] block`}>
            <Image src="/logo-dark.png" alt="joseadrianbuctuanon.dev" width={logoWidth} height={logoWidth / 3} />
          </Link>
          <div className="menu">
            <ul className="flex items-center bg-black bg-opacity-90 rounded-full py-2 px-4 flex-col md:flex-row">
              {[...SOCIALS].map((item, k) => (
                <>
                  <li
                    className={twMerge(itemClassBase.base, item.isActive ? itemClassBase.active : '')}
                    key={`${k}-${item.name.toLowerCase().replaceAll(' ', '-')}`}
                  >
                    <Link
                      href={item.href}
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
                  {k !== SOCIALS.length - 1 && <span className="hidden md:inline-block">{'/'}</span>}
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="row justify-center items-center text-center mt-10 py-2 opacity-40 border-t-[1px] border-solid border-white">
          <p>© 2023 Jose Adrian Buctuanon. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
