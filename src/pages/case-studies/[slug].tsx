import RichText from '@/components/RichText';
import { getAllCaseStudiesPages, getCaseStudy, getCaseStudyReturnType } from '@/lib/case-studies/fns';
import React from 'react';
import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BigTextAccent from '@/components/accents-decors/BigTextAccent';
// import type { CONTENTFUL_IMAGE_ASSET_TYPE } from 'src/types/contentful';

export type CaseStudyPageProps = {
  caseStudyData: getCaseStudyReturnType;
};

const CaseStudyPage: FC<CaseStudyPageProps> = (props) => {
  // if (!props.caseStudyData) {
  //   return;
  // }
  const { caseStudyData } = props;

  const {
    slug,
    title,
    excerpt,
    banner,
    thumbnail,
    techStack,
    roles,
    dateCreated,
    client,
    websiteLink,
    overview,
    problem,
    solution,
    samplesOrImagesCollection,
  } = caseStudyData;

  return (
    <>
      <section id="overview" className="flex flex-col  min-h-[400px]">
        <div className="container py-10 h-auto min-h-[calc(50vh_-_100px)] flex items-center justify-center">
          <div className="row justify-between">
            <div className="info-col w-full md:w-1/3">
              <h1 className="text-4xl">{title}</h1>
              {excerpt && <RichText content={excerpt.json} />}
            </div>
            <div className="client-info-col w-full md:w-1/3 ">
              <ul className="client-info flex flex-col space-y-2">
                <li className="md:flex-row flex-col flex justify-between w-full">
                  <span className="label pr-2 whitespace-nowrap font-bold">Client</span>
                  <span className="text-left md:text-right value">{client}</span>
                </li>
                <li className="md:flex-row flex-col flex justify-between w-full">
                  <span className="label pr-2 whitespace-nowrap font-bold">Website</span>
                  <Link href={websiteLink} className="text-left md:text-right value">
                    {websiteLink}
                  </Link>
                </li>
                <li className="md:flex-row flex-col flex justify-between w-full">
                  <span className="label pr-2 whitespace-nowrap font-bold">Roles</span>
                  <span className="text-left md:text-right value">{roles.join(' | ')}</span>
                </li>
                <li className="flex-col flex justify-between w-full align-start">
                  <span className="label pr-2 whitespace-nowrap font-bold leading-none mb-2">Tech Stack</span>
                  <span className="text-left md:text-right value flex-wrap flex leading-none">
                    {techStack?.length > 0 && (
                      <ul className="card__info__techstack flex flex-wrap items-center justify-start">
                        {techStack.map((tech, k) => (
                          <>
                            <li className="pill" key={`${k}-${tech.toLowerCase().replaceAll(' ', '-')}`}>
                              {tech}
                            </li>
                          </>
                        ))}
                      </ul>
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-image relative w-full min-h-[400px] h-[50vh]">
          <Image src={banner.url} fill alt={banner.title} className="object-cover" />
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
              <section id="overview" className="problem h-auto ">
                <h2 className="text-2xl">Overview</h2>
                {overview && (
                  <RichText content={overview.json} modifyClass={{ PARAGRAPH: '[&:not(:last-child)]:mb-4' }} />
                )}
              </section>
              <section id="problem" className="problem h-auto ">
                <h2 className="text-2xl">Problem</h2>
                {problem && (
                  <RichText content={problem.json} modifyClass={{ PARAGRAPH: '[&:not(:last-child)]:mb-4' }} />
                )}
              </section>
              <section id="solution" className="solution h-auto ">
                <h2 className="text-2xl">Solution</h2>
                {solution && (
                  <RichText content={solution.json} modifyClass={{ PARAGRAPH: '[&:not(:last-child)]:mb-4' }} />
                )}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const items = await getAllCaseStudiesPages();

  return {
    paths:
      items?.map(({ slug }: { slug: string }) => {
        return {
          params: {
            slug,
          },
        };
      }) ?? [],

    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const caseStudyData = await getCaseStudy(params.slug);
  // const nextCaseStudy = await getNextCaseStudy({ exceptSlug: params.slug });

  if (!caseStudyData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      caseStudyData,
    },
    revalidate: 10,
  };
}

export default CaseStudyPage;
