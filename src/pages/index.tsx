import BGAccent from '@/components/accents-decors/BGAccent';
import Button from '@/components/Button';
import ButtonLink from '@/components/ButtonLink';
import OvalAvatar from '@/components/OvalAvatar';
import ScollForMore from '@/components/accents-decors/ScrollForMore';
import { CLIENTS } from '@/constants/clients';
import { SOCIALS } from '@/constants/menus_and_socials';
import Image from 'next/image';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getAllCaseStudies, getAllCaseStudiesReturnType } from '@/lib/case-studies/fns';
import { FC } from 'react';
import BigTextAccent from '@/components/accents-decors/BigTextAccent';
import CaseStudyCard from '@/components/cards/CaseStudyCard';

interface HomePageProps {
  caseStudies: getAllCaseStudiesReturnType;
}

const HomePage: FC<HomePageProps> = (props) => {
  const { caseStudies } = props;

  return (
    <>
      <section id="home" className="hero-section min-h-screen flex justify-center items-center relative">
        <div className="z-10 container">
          <div className="row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-6xl leading-[1.2em]">
                Expert in developing and designing websites that drive business growth
              </h1>
              <p className="mb-10">
                {`I'm Jose, a fullstack developer with 7 years of experience. I excel in frontend and backend development, especially with ReactJS and Shopify. I love using my skills to help clients build successful websites.`}
              </p>
              <ButtonLink href="#contact">{`Let's Talk`}</ButtonLink>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="avatar-container relative">
                <ScollForMore />
                <OvalAvatar src="/headshot.jpg" alt="Jose Adrian Buctuanon" />
              </div>
            </div>
          </div>
        </div>
        <BGAccent className="z-1 top-[10vh] left-[-30vw] text-[100vw] w-[1em] h-[1em]" />
      </section>
      <section id="about" className="work-section min-h-screen flex justify-center items-center flex-col relative">
        <BigTextAccent text="About" />
        <div className="container">
          <div className="row justify-center py-20 min-h-screen items-center">
            <div className="w-full md:w-1/3 ">
              <h3 className="mb-10 text-4xl leading-[1.5em]">
                {`" I use a combination of strategic thinking and creative problem-solving to create standout projects "`}
              </h3>
            </div>
            <div className="w-full md:w-2/3 ">
              <div className="box w-full relative w-full max-w-[600px] mx-auto h-[300px] bg-slate-500">
                <div
                  className="
                  box-big
                  absolute
                  top-[50%]
                  left-[50%]
                  translate-x-[-50%]
                  translate-y-[-50%]
                  block
                  w-full
                  h-full
                  md:scale-[1.5]
                  scale-1
                "
                >
                  <Image src={`/3d-image.png`} alt="3d image" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-center py-20 min-h-screen items-center">
            <div className="w-full md:w-2/3 ">
              <OvalAvatar src="/about-me.jpg" alt="Jose Adrian Buctuanon" />
            </div>
            <div className="w-full md:w-1/3 ">
              <h2 className="text-4xl mb-10">Get to know me</h2>
              <p className="mb-10">
                {`I am a front-end developer based in the Philippines with expertise in Shopify and React. In my role, I use a combination of strategic thinking and creative problem-solving to create standout projects for a range of clients, including both large organizations and start-ups.`}
              </p>
              <p>
                {`In addition to my full-time work as a developer, I also run my own part-time business focused on creating commercial solutions for medium to large businesses. Through this venture, I have had the opportunity to lead and participate in a variety of projects, from e-commerce websites to business dashboards. My diverse experience has allowed me to develop a wide range of skills and I am always looking for new challenges to tackle.`}
              </p>
            </div>
          </div>
          <BGAccent className="z-1 bottom-[-50vh] right-[-30vw] text-[100vw] w-[1em] h-[1em]" />
        </div>
      </section>
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

          <div className="row min-h-[20vh] justify-start flex-col items-center">
            <div className="w-full flex flex-col items-center">
              <h3 className="text-4xl mb-10">Clients and Work Experiences</h3>
              <ul className="flex space-x-2 flex-wrap justify-center">
                {[...CLIENTS].map((c, k) => (
                  <li key={`${k}-${c.name.toLowerCase().replaceAll(' ', '-')}}`}>
                    <a href={c.href} target="_blank" rel="noreferrer" className="mx-2 p-2 text-center">
                      {c.name}
                    </a>
                    {k !== CLIENTS.length - 1 && <span>{` - `}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const data = await getAllCaseStudies({ limit: 3 });

  return {
    props: {
      caseStudies: data,
    },
  };
}

export default HomePage;
