import { Component, type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Footer from './Footer';
import Nav from './Nav';
import { Syne, Roboto_Mono } from 'next/font/google';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const font_syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--display-font',
});

const font_roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--body-font',
});

const Layout: FC<LayoutProps> = (props) => {
  const router = useRouter();
  const { isMobileOpen, isDarkMode } = useSelector((state: RootState) => state.project);

  const { children, className = '' } = props;

  const pageClass = `page--${router.pathname.replaceAll('/', '-')}`;
  const componentClass = twMerge(
    pageClass,
    'flex min-h-screen flex-col  overflow-hidden pt-[100px] md:px-0 bg-white dark:bg-black',
    className,
  );

  return (
    <div
      className={`${font_syne.variable} ${font_roboto_mono.variable} `}
      {...(isDarkMode && {
        'data-mode': 'dark',
      })}
    >
      <Nav isDarkMode={isDarkMode} isMobileOpen={isMobileOpen} />
      <main className={componentClass}>
        {children}
        <Footer isDarkMode={isDarkMode} />
      </main>
    </div>
  );
};

export default Layout;
