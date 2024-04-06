import type { FC } from 'react';
import ButtonLink from '../ButtonLink';
import CaseStudyCard from '../cards/CaseStudyCard';
import { TCaseStudy } from '@/lib/case-studies/types';

interface CaseStudySectionProps {
  caseStudies: TCaseStudy[];
}

const CaseStudySection: FC<CaseStudySectionProps> = (props) => {
  const { caseStudies } = props;

  return (
    <div className="container">
      <div className="row justify-center">
        <h3 className="text-4xl mb-10">Selected Case Studies</h3>
      </div>
      <div className="row justify-center py-20 items-start">
        {caseStudies.map((cs, k) => (
          <div className="w-full md:w-1/3 " key={`${k}-${cs.slug}`}>
            <CaseStudyCard {...cs} />
          </div>
        ))}
        <div className="w-full flex justify-center items-center my-10">
          <ButtonLink href="/case-studies">More Case Studies</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
