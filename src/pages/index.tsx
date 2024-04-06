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
import Layout from '@/components/Layout';
import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import animationData from '@/lotties/lottie_anim.json';
import { highlightCaseStudies } from '@/lib/case-studies/data';

interface HomePageProps {
  caseStudies: getAllCaseStudiesReturnType;
}

const HomePage: FC<HomePageProps> = (props) => {
  const { caseStudies } = props;
  const { isDarkMode } = useSelector((state: RootState) => state.project);

  return (
    <Layout>
      <section id="home" className="hero-section min-h-screen flex justify-center items-center relative">
        <div className="z-10 container">
          <div className="row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-6xl leading-[1.2em]">
                Specialized in crafting and implementing systems that enhance business productivity and growth.
              </h1>
              <p className="mb-10">
                {`I'm Ranier Chuck, a seasoned full-stack developer with seven years of experience under my belt. My proficiency spans across both frontend and backend development, with a keen focus on ReactJS, NestJS, and ExpressJS. I take pride in my ability to navigate and excel within these technologies, delivering comprehensive solutions that drive success.`}
              </p>
              <ButtonLink href="#contact">{`Let's Talk`}</ButtonLink>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="avatar-container relative">
                <ScollForMore />
                <OvalAvatar src="/formal-pose.jpg" alt="Ranier Chuck Concepcion" />
              </div>
            </div>
          </div>
        </div>
        <BGAccent
          isDarkMode={isDarkMode}
          className="z-1 top-[10vh] left-[-30vw] text-[600px] md:text-[150vw] lg:text-[100vw] w-[1em] h-[1em]"
        />
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
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                width="100%"
                height="100%"
                speed={0.5}
              />
              {/* <div className="box w-full relative w-full max-w-[600px] mx-auto h-[300px] bg-slate-500">
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
              </div> */}
            </div>
          </div>
          <div className="row justify-center py-20 min-h-screen items-center">
            <div className="w-full md:w-2/3 ">
              <OvalAvatar src="/formal.jpg" alt="Ranier Chuck Concepcion" />
            </div>
            <div className="w-full md:w-1/3 ">
              <h2 className="text-4xl mb-10">Get to know me</h2>
              <p className="mb-10">
                {`I'm a full-stack developer based in the Philippines, specializing in ReactJS, NodeJS, NestJS, and ExpressJS. In my role, I blend strategic insight with inventive problem-solving to craft outstanding projects for a diverse clientele, ranging from startups to large enterprises.`}
              </p>
              {/* <p>
                {`In addition to my full-time work as a developer, I also run my own part-time business focused on creating commercial solutions for medium to large businesses. Through this venture, I have had the opportunity to lead and participate in a variety of projects, from e-commerce websites to business dashboards. My diverse experience has allowed me to develop a wide range of skills and I am always looking for new challenges to tackle.`}
              </p> */}
            </div>
          </div>
          <BGAccent
            isDarkMode={isDarkMode}
            className="z-1 bottom-[-50vh] right-[-30vw] text-[600px] md:text-[150vw] lg:text-[100vw] w-[1em] h-[1em]"
          />
        </div>
      </section>
      <section id="case-studies" className="work-section min-h-screen flex justify-center items-center flex-col">
        <BigTextAccent text="Projects" direction="right" />
        <div className="container">
          <div className="row justify-center">
            <h3 className="text-4xl mb-10">Selected Projects</h3>
          </div>
          <div className="row justify-center py-20 items-start">
            {/* {caseStudies.items.map((cs, k) => (
              <div className="w-full md:w-1/3 " key={`${k}-${cs.slug}`}>
                <CaseStudyCard {...cs} />
              </div>
            ))} */}
            {highlightCaseStudies.map((cs, k) => (
              <div className="w-full md:w-1/3 " key={`${k}-${cs.slug}`}>
                <CaseStudyCard {...cs} />
              </div>
            ))}
            <div className="w-full flex justify-center items-center my-10">
              <ButtonLink href="/projects">More Projects</ButtonLink>
            </div>
          </div>

          {/* <div className="row min-h-[20vh] justify-start flex-col items-center">
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
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

// export async function getStaticProps() {
//   const data = await getAllCaseStudies({ limit: 3 });

//   return {
//     props: {
//       caseStudies: data,
//     },
//   };
// }

export default HomePage;
