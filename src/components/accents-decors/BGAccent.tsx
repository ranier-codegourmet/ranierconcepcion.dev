import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

type BGAccentProps = {
  className?: string;
  isDarkMode: boolean;
};

const BGAccent: FC<BGAccentProps> = (props) => {
  const { className, isDarkMode } = props;
  return (
    <div className={twMerge(`bg-accent opacity-20 pointer-events-none w-full absolute h-full`, className)}>
      {isDarkMode ? (
        <Image src="/accent.png" fill alt="bg accent" className="object-contain" />
      ) : (
        <Image src="/accent-white-bg.png" fill alt="bg accent" className="object-contain" />
      )}
    </div>
  );
};

export default BGAccent;
