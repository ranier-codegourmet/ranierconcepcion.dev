import type { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type BigTextAccentProps = {
  text: string;
};

const BigTextAccent: FC<BigTextAccentProps> = (props) => {
  const { text } = props;

  return (
    <h2 className="pointer-events-none w-full block text-[20vw] uppercase text-black dark:text-neutral-400 leading-1">
      {text}
    </h2>
  );
};

export default BigTextAccent;
