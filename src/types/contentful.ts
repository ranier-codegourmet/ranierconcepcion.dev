import type { Document } from '@contentful/rich-text-types';

export type TContentfulJSON = {
  json: Document;
};

export type TContentfulImageAsset = {
  title: string;
  description: string;
  url: string;
};
