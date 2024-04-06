import { TContentfulImageAsset, TContentfulJSON } from '@/types/contentful';
import { ReactNode } from 'react';

export interface TCaseStudyPageInfo {
  slug: string;
  sys: {
    id: number;
  };
}

export interface TCaseStudySeachableFields extends TCaseStudyPageInfo {
  title: string;
}

export interface TCaseStudyResultFields extends TCaseStudySeachableFields {
  excerpt: TContentfulJSON;
  banner: TContentfulImageAsset;
  thumbnail: TContentfulImageAsset;
  techStack: string[];
  roles: string[];
  dateCreated: string;
  client: string;
  websiteLink: string;
}

export interface TCaseStudyPageFields extends TCaseStudyResultFields {
  overview: TContentfulJSON;
  problem: TContentfulJSON;
  solution: TContentfulJSON;
  samplesOrImagesCollection: {
    items: TContentfulImageAsset[];
  };
}

export interface TCaseStudy {
  techStack: string[];
  title: string;
  thumbnail: string;
  shortDescription: ReactNode;
  slug: string;
}

export interface TCaseStudyPage extends TCaseStudy {
  problem: ReactNode;
  solution: ReactNode;
  websiteLink: string;
  roles: string[];
  banner: string;
}
