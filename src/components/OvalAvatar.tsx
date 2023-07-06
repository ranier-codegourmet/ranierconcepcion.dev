import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image, { ImageProps } from 'next/image';

type OvalAvatarProps = Pick<ImageProps, 'src' | 'alt' | 'className'>;

const OvalAvatar: FC<OvalAvatarProps> = (props) => {
  const { className = '', alt, src } = props;

  return (
    <div
      className={twMerge(
        'avatar w-full mx-auto max-w-[500px] bg-neutral-400 h-[800px] block rounded-full overflow-hidden relative',
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default OvalAvatar;
