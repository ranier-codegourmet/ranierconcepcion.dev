import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { twMerge } from 'tailwind-merge';
import { SOCIALS } from '@/constants/menus_and_socials';
import ButtonLink from './ButtonLink';
import OvalAvatar from './OvalAvatar';
import BGAccent from './accents-decors/BGAccent';
import BigTextAccent from './accents-decors/BigTextAccent';
import Logo, { LogoProps } from './Logo';

interface FooterProps extends Pick<LogoProps, 'logoWidth' | 'logoWidthMobile'> {
  className?: string;
  isDarkMode: boolean;
}

const itemClassBase = {
  base: `
    text-neutral-600
    dark:text-white
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
  const { className, isDarkMode, logoWidth = 250, logoWidthMobile = 50 } = props;

  const componentClass = 'footer-section w-full bg-neutral-300 dark:bg-black py-10 md:px-0 px-4';
  return (
    <>
      <section
        id="contact"
        className="contact-section flex justify-center items-center flex-col relative overflow-hidden"
      >
        <BigTextAccent text="Contact" />
        <BGAccent
          isDarkMode={isDarkMode}
          className="z-1 bottom-[-70vh] left-[-40vw] text-[600px] md:text-[150vw] lg:text-[100vw] w-[1em] h-[1em]"
        />
        <div className="container">
          <div className="row justify-center py-20 min-h-[50vh] items-center">
            <div className="w-full md:w-1/2 flex flex-col space-y-4 items-start justify-start order-2 md:order-1">
              <div className="flex flex-col space-y-4 items-start justify-start max-w-[500px]">
                <h3 className="text-4xl">{`Keen to chat about a project of your own?`}</h3>
                <p>{`Need help with your software needs? Let's connect and chat like old friends! Reach out to me today for personalized solutions and friendly consultation.`}</p>
                <ButtonLink href="mailto:ranier@codegourmet.io">{`Let's talk`}</ButtonLink>
              </div>
              <ul className="flex space-x-2 flex-wrap">
                {[...SOCIALS].map((s, k) => (
                  <>
                    <li key={`${k}-${s.name.toLowerCase().replaceAll(' ', '-')}}`}>
                      <a href={s.href} target="_blank" rel="noreferrer" className="mx-2 p-2 text-center">
                        {s.name}
                      </a>
                    </li>
                    {SOCIALS.length - 1 !== k && <span>{` / `}</span>}
                  </>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex flex-col space-y-4 items-start justify-start order-1 md:order-2">
              <OvalAvatar src="/formal-pose.jpg" alt="Ranier Chuck Concepcion" />
            </div>
          </div>
        </div>
      </section>
      <footer className={twMerge(componentClass, className)}>
        <div className="container">
          <div className="row justify-between items-center py-2 flex-col md:flex-row">
            <Logo isDarkMode={isDarkMode} logoWidth={logoWidth} logoWidthMobile={logoWidthMobile} />
            <div className="menu">
              <ul className="flex items-center  bg-opacity-90 rounded-full py-2 px-4 flex-col md:flex-row">
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
          <div className="row justify-center items-center text-center mt-10 py-2 opacity-40 border-t-[1px] border-solid dark:border-white border-neutral-800">
            <p>© 2024 Ranier Chuck Concepcion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
