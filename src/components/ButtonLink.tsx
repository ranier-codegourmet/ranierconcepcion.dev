import type { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { BTN_BASE_CLASS, BTN_NORMAL_THEME, BTN_SPECIAL_THEME } from '@/twclasses/buttonstyles';
import { Url } from 'next/dist/shared/lib/router/router';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isSpecial?: boolean;
}

const ButtonLink: FC<ButtonLinkProps> = (props) => {
  const { children, className = '', href, isSpecial } = props;

  const normalBtnClass = twMerge(BTN_BASE_CLASS, BTN_NORMAL_THEME, className);

  const specialBtnClass = twMerge(BTN_BASE_CLASS, BTN_SPECIAL_THEME, className);

  return (
    <Link
      href={href as Url}
      className={cn({
        [`btn--regular ${normalBtnClass}`]: !isSpecial,
        [`btn--special ${specialBtnClass}`]: isSpecial,
      })}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
