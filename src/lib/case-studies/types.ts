import { TContentfulImageAsset, TContentfulJSON } from '@/types/contentful';

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
