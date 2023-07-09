import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
import { BLOCKS } from '@contentful/rich-text-types';
import type { ReactNode } from 'react';
import React from 'react';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type TModifyClass = {
  [key: string]: string;
};
export interface RichTextProps {
  content: Document;
  modifyClass?: TModifyClass;
}

const RichText: FC<RichTextProps> = (props) => {
  const { content, modifyClass } = props;

  const h1Class = modifyClass && modifyClass.HEADING_1 ? twMerge('text-lg', modifyClass.HEADING_1 || '') : 'text-lg';
  const pClass = modifyClass && modifyClass.PARAGRAPH ? twMerge('text-base', modifyClass.PARAGRAPH || '') : 'text-base';

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_: unknown, children: ReactNode) => <h1 className={h1Class}>{children}</h1>,
      [BLOCKS.PARAGRAPH]: (_: unknown, children: ReactNode) => <p className={pClass}>{children}</p>,
    },
  };

  return <>{documentToReactComponents(content, options)}</>;
};

export default RichText;
