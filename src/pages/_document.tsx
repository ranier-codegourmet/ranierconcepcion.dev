import { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en" data-mode="dark">
      <Head />
      <body className="bg-white dark:bg-black">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
