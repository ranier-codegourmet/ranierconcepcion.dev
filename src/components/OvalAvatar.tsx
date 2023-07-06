import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image, { ImageProps } from 'next/image';

type OvalAvatarProps = Pick<ImageProps, 'src' | 'alt' | 'className'>;

const OvalAvatar: FC<OvalAvatarProps> = (props) => {
  const { className = '', alt, src } = props;

  return (
    <div
      className={twMerge(
        'avatar w-full mx-auto  bg-neutral-400 max-w-[250px] h-[400px] md:max-w-[500px] md:h-[800px] block rounded-full overflow-hidden relative',
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default OvalAvatar;
