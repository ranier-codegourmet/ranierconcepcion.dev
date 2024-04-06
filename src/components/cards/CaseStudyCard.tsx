import type { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import ButtonLink from '../ButtonLink';
import { TCaseStudy, TCaseStudyResultFields } from '@/lib/case-studies/types';
import Image from 'next/image';
import RichText from '../RichText';

interface CaseStudyCardProps extends TCaseStudy {
  className?: string;
}

const CaseStudyCard: FC<CaseStudyCardProps> = (props) => {
  // const { className, slug, title, excerpt, banner, thumbnail, techStack, roles, dateCreated, client, websiteLink } =
  //   props;
  const { shortDescription, slug, techStack, thumbnail, title, className } = props;
  const componentClass = `
    card
    w-full
    p-2
  `;

  // const thumbObj = thumbnail || banner;
  const thumbAlt = `A case study of  "${title}"`;

  const csUrl = `/projects/${slug}`;

  return (
    <div className={twMerge(componentClass, className)}>
      <Link href={csUrl} className="card__image__anchor">
        <div className="card__image relative w-full h-[400px]">
          <Image fill src={thumbnail} alt={thumbAlt} className="object-cover" />
        </div>
      </Link>
      <div className="card__info flex flex-col items-start justify-start pt-4 space-y-4">
        {title && (
          <Link href={csUrl}>
            <h4 className="card__info__title text-2xl">{title}</h4>
          </Link>
        )}
        {/* {excerpt && (
          <div className="card__info__excerpt ">
            <RichText
              content={excerpt.json}
              modifyClass={{
                PARAGRAPH: 'text-sm font-body leading-snug',
              }}
            />
          </div>
        )} */}
        {shortDescription && <div className="card__info__excerpt ">{shortDescription}</div>}
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
        <ButtonLink href={csUrl} className="block w-full md:w-auto text-center " buttonStyle="MUTED">
          View Project
        </ButtonLink>
      </div>
    </div>
  );
};

export default CaseStudyCard;
