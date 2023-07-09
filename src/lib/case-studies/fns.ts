import { fetchGraphQL } from '@/pages/api/api-utils';
import { CASE_STUDY_PAGE_FIELDS, CASE_STUDY_PAGE_INFO, CASE_STUDY_RESULTS_FIELDS } from './queries';
import { TCaseStudyResultFields } from './types';

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
  console.log('[REQ] == ', gQuery);

  const entries = await fetchGraphQL(gQuery);

  return entries?.data?.caseStudyCollection;
}
