import RichText from '@/components/RichText';
import { getAllCaseStudiesPages, getCaseStudy, getCaseStudyReturnType } from '@/lib/case-studies/fns';
import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BigTextAccent from '@/components/accents-decors/BigTextAccent';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { TCaseStudyPage } from '@/lib/case-studies/types';
import { allDetailedCaseStudies } from '@/lib/case-studies/data';

export type CaseStudyPageProps = {
  caseStudyData: getCaseStudyReturnType;
};

const CaseStudyPage: FC<CaseStudyPageProps> = (props) => {
  const {
    query: { slug },
  } = useRouter();

  const [caseStudyData, setCaseStudyData] = useState<TCaseStudyPage | null>(null);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const data = allDetailedCaseStudies[slug as string];

    if (!data) {
      return;
    }

    setCaseStudyData(data);
  }, [slug]);

  return (
    <Layout>
      <section id="overview" className="flex flex-col  min-h-[400px]">
        <div className="container py-10 h-auto min-h-[calc(50vh_-_100px)] flex items-center justify-center">
          <div className="row justify-between">
            <div className="info-col w-full md:w-1/3">
              <h1 className="text-4xl">{caseStudyData?.title}</h1>
              {/* {excerpt && <RichText content={excerpt.json} />} */}
              {caseStudyData?.shortDescription}
            </div>
            <div className="client-info-col w-full md:w-1/3 ">
              <ul className="client-info flex flex-col space-y-2">
                <li className="md:flex-row flex-col flex justify-between w-full">
                  <span className="label pr-2 whitespace-nowrap font-bold">Client</span>
                  <span className="text-left md:text-right value">{caseStudyData?.title}</span>
                </li>
                <li className="md:flex-row flex-col flex justify-between w-full">
                  <span className="label pr-2 whitespace-nowrap font-bold">Website</span>
                  <Link href={caseStudyData?.websiteLink ?? ''} className="text-left md:text-right value">
                    {caseStudyData?.websiteLink}
                  </Link>
                </li>
                <li className="md:flex-row flex-col flex justify-between w-full">
                  <span className="label pr-2 whitespace-nowrap font-bold">Roles</span>
                  <span className="text-left md:text-right value">{caseStudyData?.roles.join(' | ')}</span>
                </li>
                <li className="flex-col flex justify-between w-full align-start">
                  <span className="label pr-2 whitespace-nowrap font-bold leading-none mb-2">Tech Stack</span>
                  <span className="text-left md:text-right value flex-wrap flex leading-none">
                    <ul className="card__info__techstack flex flex-wrap items-center justify-start">
                      {caseStudyData?.techStack.map((tech, k) => (
                        <>
                          <li className="pill" key={`${k}-${tech.toLowerCase().replaceAll(' ', '-')}`}>
                            {tech}
                          </li>
                        </>
                      ))}
                    </ul>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-image relative w-full min-h-[400px] h-[50vh]">
          <Image src={caseStudyData?.banner ?? ''} fill alt={caseStudyData?.title ?? ''} className="object-cover" />
        </div>
      </section>
      <section id="details" className="py-10">
        <BigTextAccent text="Details" />
        <div className="container">
          <div className="row">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl">Details</h2>
            </div>
            <div className="w-full space-y-10 py-10 md:w-2/3 border-left border-l-2 pl-10 border-left-color-white flex flex-col items-start justify-center">
              <section id="problem" className="problem h-auto ">
                <h2 className="text-2xl">Problem</h2>
                {caseStudyData?.problem}
                {/* {problem && (
                  <RichText content={problem.json} modifyClass={{ PARAGRAPH: '[&:not(:last-child)]:mb-4' }} />
                )} */}
              </section>
              <section id="solution" className="solution h-auto ">
                <h2 className="text-2xl">Solution</h2>
                {/* {solution && (
                  <RichText content={solution.json} modifyClass={{ PARAGRAPH: '[&:not(:last-child)]:mb-4' }} />
                )} */}
                {caseStudyData?.solution}
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// export async function getStaticPaths() {
//   const items = await getAllCaseStudiesPages();

//   return {
//     paths:
//       items?.map(({ slug }: { slug: string }) => {
//         return {
//           params: {
//             slug,
//           },
//         };
//       }) ?? [],

//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: { params: { slug: string } }) {
//   const caseStudyData = await getCaseStudy(params.slug);
//   // const nextCaseStudy = await getNextCaseStudy({ exceptSlug: params.slug });

//   if (!caseStudyData) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       caseStudyData,
//     },
//     revalidate: 10,
//   };
// }

export default CaseStudyPage;
