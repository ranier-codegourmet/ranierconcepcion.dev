import type { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSpecial?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className = '', isSpecial } = props;

  const btnBaseClass = `
      px-10
      py-4
      w-auto
      font-body
      border-[1px]
      border-solid
      border-transparent
      bg-opacity-100
      transition
      ease-in-out
      mx-2
  `;

  const normalBtnClass = twMerge(
    className,
    btnBaseClass,
    `
      bg-black
      text-white
      border-color-black
      hover:bg-opacity-5
      hover:text-black
      border-2
      border-solid
      border-black

      dark:bg-white
      dark:text-black
      dark:hover:bg-opacity-10
      dark:hover:text-white
      dark:hover:border-white
    `,
  );

  const specialBtnClass = twMerge(
    className,
    btnBaseClass,
    `
      bg-gradient-to-r
      from-green-400
      to-blue-500
      text-white
      border-color-transparent

  `,
  );

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
