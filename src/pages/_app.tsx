import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Syne, Roboto_Mono } from 'next/font/google';
import { useRouter } from 'next/router';

// If loading a variable font, you don't need to specify the font weight

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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className={`${font_syne.variable} ${font_roboto_mono.variable}`}>
      <Nav />
      <main
        className={`page--${router.pathname.replaceAll(
          '/',
          '-',
        )} flex min-h-screen flex-col  overflow-hidden px-4 pt-[100px] md:px-0`}
      >
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}
