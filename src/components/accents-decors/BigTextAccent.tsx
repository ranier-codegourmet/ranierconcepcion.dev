import type { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type BigTextAccentProps = {
  text: string;
  direction?: 'left' | 'right';
};

const BigTextAccent: FC<BigTextAccentProps> = (props) => {
  const { text, direction = 'left' } = props;

  return (
    <h2
      className={twMerge(
        direction === 'left' && 'animate-marquee-ltr',
        direction === 'right' && 'animate-marquee-rtl',
        'pointer-events-none w-full block text-[15vw] uppercase text-black dark:text-neutral-400 leading-1 whitespace-nowrap',
      )}
    >
      {text} - {text} - {text} - {text} - {text} - {text} - {text}
    </h2>
  );
};

export default BigTextAccent;
