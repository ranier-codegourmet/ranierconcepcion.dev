import { FC } from 'react';
import BigTextAccent from '@/components/accents-decors/BigTextAccent';
import OvalAvatar from '@/components/OvalAvatar';
import BGAccent from '@/components/accents-decors/BGAccent';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';

const AboutPage: FC = (props) => {
  const { isDarkMode } = useSelector((state: RootState) => state.project);

  return (
    <Layout>
      <section id="about" className="work-section min-h-screen flex justify-center items-center flex-col relative">
        <BigTextAccent text="About" />
        <div className="container">
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
            className="z-1 top-0 left-[-30vw] text-[600px] md:text-[150vw] lg:text-[100vw] w-[1em] h-[1em]"
          />
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
