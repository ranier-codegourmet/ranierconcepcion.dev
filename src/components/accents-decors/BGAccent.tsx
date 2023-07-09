import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

type BGAccentProps = {
  className?: string;
};

const BGAccent: FC<BGAccentProps> = (props) => {
  const { className } = props;
  return (
    <div className={twMerge(`opacity-20 pointer-events-none w-full absolute h-full`, className)}>
      <Image src="/accent.png" fill alt="bg accent" className="object-contain" />
    </div>
  );
};

export default BGAccent;
