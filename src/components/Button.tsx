import type { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import * as BUTTONSTYLES from '@/twclasses/buttonstyles';
import { omit } from 'lodash';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: 'NORMAL' | 'SPECIAL' | 'MUTED';
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className = '', buttonStyle = 'NORMAL' } = props;

  return (
    <button
      {...omit(props, ['buttonStyle', 'className', 'children'])}
      className={twMerge(BUTTONSTYLES.BTN_BASE_CLASS, BUTTONSTYLES[buttonStyle], className)}
    >
      {children}
    </button>
  );
};

export default Button;
