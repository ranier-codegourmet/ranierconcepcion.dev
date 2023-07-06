import BGAccent from '@/components/BGAccent';
import BigTextAccent from '@/components/BigTextAccent';
import Button from '@/components/Button';
import OvalAvatar from '@/components/OvalAvatar';
import ScollForMore from '@/components/ScrollForMore';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col  `}>
      <section id="home" className="hero-section min-h-screen flex justify-center items-center relative">
        <div className="z-10 container">
          <div className="row items-center">
            <div className="w-full md:w-1/2 ">
              <h1 className="md:text-4xl lg:text-6xl leading-[1.2em]">
                Expert in developing and designing websites that drive business growth
              </h1>
              <p className="mb-10">
                {`I'm Jose, a fullstack developer with 7 years of experience. I excel in frontend and backend development, especially with ReactJS and Shopify. I love using my skills to help clients build successful websites.`}
              </p>
              <Button>{`Let's Talk`}</Button>
            </div>
            <div className="w-full md:w-1/2 ">
              <div className="avatar-container relative">
                <ScollForMore />
                <OvalAvatar src="/headshot.jpg" alt="Jose Adrian Buctuanon" />
              </div>
            </div>
          </div>
        </div>
        <BGAccent className="z-1 top-[10vh] left-[-30vw] text-[100vw] w-[1em] h-[1em]" />
      </section>
      <section id="about" className="work-section min-h-screen flex justify-center items-center flex-col">
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
                  scale-[1.5]
                "
                >
                  <Image src={`/3d-image.png`} alt="3d image" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-center py-20 min-h-screen items-center">
            <div className="w-full md:w-2/3 ">
              <OvalAvatar src="/talk-exposure-edited.jpg" alt="Jose Adrian Buctuanon" />
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
        </div>
      </section>
      <section id="work" className="work-section min-h-screen flex justify-center items-center flex-col">
        <BigTextAccent text="Works" />
        <div className="container">
          <div className="row justify-center py-20 min-h-[60vh] items-center">
            <div className="w-full md:w-1/3 ">
              <h3 className="mb-10 text-4xl">
                {`I use a combination of strategic thinking and creative problem-solving to create standout projects`}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
