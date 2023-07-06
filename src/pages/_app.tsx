import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Syne, Roboto_Mono } from 'next/font/google';

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
  return (
    <div className={`${font_syne.variable} ${font_roboto_mono.variable}`}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
