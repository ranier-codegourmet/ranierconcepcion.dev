import { fetchGraphQL } from '@/pages/api/api-utils';
import { CASE_STUDY_PAGE_FIELDS, CASE_STUDY_PAGE_INFO, CASE_STUDY_RESULTS_FIELDS } from './queries';
import { TCaseStudyPageFields, TCaseStudyResultFields } from './types';

export type getAllCaseStudiesReturnType = {
  total: number;
  items: TCaseStudyResultFields[];
};
export async function getAllCaseStudies(props?: { limit?: number }) {
  const gQuery = `query {
      caseStudyCollection(order: sys_publishedAt_DESC ${props?.limit ? `, limit: ${props.limit}` : ''}) {
        total,
        items {
          ${CASE_STUDY_RESULTS_FIELDS}
        }
      }
    }`;

  const entries = await fetchGraphQL(gQuery);

  return entries?.data?.caseStudyCollection;
}

export type getCaseStudyReturnType = TCaseStudyPageFields;
export async function getCaseStudy(slug: string) {
  const gQuery = `query {
      caseStudyCollection(where: { slug: "${slug}"}) {
        items {
          ${CASE_STUDY_PAGE_FIELDS}
        }
      }
    }`;
  const entries = await fetchGraphQL(gQuery);

  return entries?.data?.caseStudyCollection?.items[0];
}

export async function getAllCaseStudiesPages() {
  const entries = await fetchGraphQL(
    `query {
      caseStudyCollection(order: sys_publishedAt_DESC) {
        items {
          ${CASE_STUDY_PAGE_INFO}
        }
      }
    }`,
  );

  return entries?.data?.caseStudyCollection?.items;
}
