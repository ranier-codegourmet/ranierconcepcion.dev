import type { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import * as BUTTONSTYLES from '@/twclasses/buttonstyles';
import { Url } from 'next/dist/shared/lib/router/router';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  buttonStyle?: 'NORMAL' | 'SPECIAL' | 'MUTED';
}

const ButtonLink: FC<ButtonLinkProps> = (props) => {
  const { href, children, className = '', buttonStyle = 'NORMAL' } = props;

  return (
    <Link href={href as Url} className={twMerge(BUTTONSTYLES.BTN_BASE_CLASS, BUTTONSTYLES[buttonStyle], className)}>
      {children}
    </Link>
  );
};

export default ButtonLink;
