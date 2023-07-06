import type { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { BTN_BASE_CLASS, BTN_NORMAL_THEME, BTN_SPECIAL_THEME } from '@/twclasses/buttonstyles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSpecial?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className = '', isSpecial } = props;

  const normalBtnClass = twMerge(BTN_BASE_CLASS, BTN_NORMAL_THEME, className);

  const specialBtnClass = twMerge(BTN_BASE_CLASS, BTN_SPECIAL_THEME, className);

  return (
    <button
      className={cn({
        [`btn--regular ${normalBtnClass}`]: !isSpecial,
        [`btn--special ${specialBtnClass}`]: isSpecial,
      })}
    >
      {children}
    </button>
  );
};

export default Button;