import { getAllCaseStudies, getAllCaseStudiesReturnType } from '@/lib/case-studies/fns';
import { FC } from 'react';
import BigTextAccent from '@/components/accents-decors/BigTextAccent';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import Layout from '@/components/Layout';

interface CaseStudiesPageProps {
  caseStudies: getAllCaseStudiesReturnType;
}

const CaseStudiesPage: FC<CaseStudiesPageProps> = (props) => {
  const { caseStudies } = props;

  return (
    <Layout>
      <section id="case-studies" className="work-section min-h-screen flex justify-center items-center flex-col">
        <BigTextAccent text="Case Studies" direction="right" />
        <div className="container">
          <div className="row justify-center">
            <h3 className="text-4xl mb-10">Selected Case Studies</h3>
          </div>
          <div className="row justify-center py-20 items-start">
            {caseStudies.items.map((cs, k) => (
              <div className="w-full md:w-1/3 " key={`${k}-${cs.slug}`}>
                <CaseStudyCard {...cs} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getAllCaseStudies({ limit: 5 });

  return {
    props: {
      caseStudies: data,
    },
  };
}

export default CaseStudiesPage;
