import { TCaseStudy, TCaseStudyPage } from './types';

export const highlightCaseStudies: TCaseStudy[] = [
  {
    title: 'Bermwood Technologies',
    techStack: ['React', 'Next.js', 'TypeScript', 'Material UI', 'CSS', 'SCSS'],
    thumbnail: '/bermwood-thumbnail.jpg',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a senior software engineer at Bermwood, I have spearheaded the launch of several front-end development projects. My experience includes driving these projects to completion under stringent deadlines, incorporating multiple key features ready for production release. Moreover, I have taken a leading role in the development of reusable components and the adoption of best practices, all aimed at maintaining the highest standards of code quality.`}
      </p>
    ),
    slug: 'bermwood-technologies',
  },
  {
    title: 'Taskworld',
    techStack: [
      'React',
      'TypeScript',
      'NestJS',
      'Websockets',
      'Redis',
      'Docker',
      'Kubernetes',
      'GRPC',
      'Microservices',
      'MongoDB',
    ],
    thumbnail: '/taskworld-banner-v1.png',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a software engineer at Taskworld, I had the privilege of being part of a team responsible for developing a major feature that significantly transformed the functionality of our product. Additionally, I contributed to a team effort that successfully upgraded the product's technology stack, ensuring its seamless operation.`}
      </p>
    ),
    slug: 'taskworld',
  },
  {
    title: 'Lanturn',
    techStack: ['React', 'Material UI', 'NodeJS', 'ExpressJS', 'PostgreSQL'],
    thumbnail: '/lanturn-banner-v1.png',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a software engineer at Lanturn, I played a crucial role in the team tasked with developing and crafting complex queries for use in graphs and statistics, enhancing the analytical capabilities of our applications.`}
      </p>
    ),
    slug: 'lanturn',
  },
];

export const selectedCaseStudies: TCaseStudy[] = [
  ...highlightCaseStudies,
  {
    title: 'Homepass',
    techStack: ['React', 'TypeScript', 'NodeJS', 'ExpressJS', 'Hapi', 'MongoDB', 'Material UI', 'React Native', 'AWS'],
    thumbnail: '/homepass-banner-v1.png',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a software engineer at Homepass (a part of Domain), I was integral to the team focused on developing and maintaining the system's architecture during peak usage periods. Additionally, I contributed to the integration of a new feature designed to seamlessly connect users with other products offered by Domain.`}
      </p>
    ),
    slug: 'homepass',
  },
  {
    title: 'LeagueAlly',
    techStack: ['Angular 1', 'React', 'Material UI', 'NextJS', 'ExpressJS', 'RethingDB', 'AWS'],
    thumbnail: '/leagueally-banner-v1.png',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a full-stack developer at LeagueAlly, I assumed the leadership role in not only introducing new features and maintaining the system but also in driving the latest revision of LeagueAlly with React. My efforts culminated in optimizing the system performance by up to 50%, significantly enhancing efficiency and user experience.`}
      </p>
    ),
    slug: 'leagueally',
  },
];

export const allDetailedCaseStudies: { [key: string]: TCaseStudyPage } = {
  'bermwood-technologies': {
    title: 'Bermwood Technologies',
    techStack: ['React', 'Next.js', 'TypeScript', 'Material UI', 'CSS', 'SCSS'],
    thumbnail: '/bermwood-thumbnail.jpg',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a senior software engineer at Bermwood, I have spearheaded the launch of several front-end development projects. My experience includes driving these projects to completion under stringent deadlines, incorporating multiple key features ready for production release. Moreover, I have taken a leading role in the development of reusable components and the adoption of best practices, all aimed at maintaining the highest standards of code quality.`}
      </p>
    ),
    slug: 'bermwood-technologies',
    problem: (
      <p className="text-base [&:not(:last-child)]:mb-4">
        {`Before Bermwood brought me on board, they encountered difficulties in securing someone with the necessary experience to lead a React-based project for an upcoming project.`}
      </p>
    ),
    solution: (
      <>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`Before initiating the project, I carefully considered which framework would best suit our needs. It was imperative to select a technology that would accommodate our team's varying levels of experience, especially since most members were unfamiliar with ReactJS. After thorough consideration, I opted for the NextJS framework. Its file-based routing and streamlined deployment process made it an ideal choice. Additionally, I incorporated Redux for state management, alongside SWR and Axios for API requests. We chose Material UI for our theme, leveraging the team's familiarity with it. Integration of Okta for front-end authentication, utilizing tokens for backend communication, was another key implementation. Furthermore, I spearheaded the development of major project features.`}
        </p>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`To ensure continuous progress and client engagement, we conducted bi-weekly demonstrations showcasing our latest developments. This approach necessitated rapid development to meet our deadlines and deliver the expected features. Upon completing all features and transitioning the application to production, we shifted focus to our next project. While employing a similar strategy, I made a significant change by replacing SWR with Tanstack Query, enhancing our API request management. Additionally, we utilized Tanstack InfiniteQuery for certain features. Like the previous project, we maintained our bi-weekly client demos, emphasizing timely feature implementation. Our ability to meet deadlines consistently has reinforced the client's confidence in Bermwood's capacity to overcome challenges and deliver solutions effectively.`}
        </p>
      </>
    ),
    websiteLink: 'https://www.bermwood.com/',
    roles: ['Senior Software Engineer'],
    banner: '/bermwood-banner-v1.png',
  },
  taskworld: {
    title: 'Taskworld',
    techStack: [
      'React',
      'TypeScript',
      'NestJS',
      'Websockets',
      'Redis',
      'Docker',
      'Kubernetes',
      'GRPC',
      'Microservices',
      'MongoDB',
    ],
    thumbnail: '/taskworld-banner-v1.png',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a software engineer at Taskworld, I had the privilege of being part of a team responsible for developing a major feature that significantly transformed the functionality of our product. Additionally, I contributed to a team effort that successfully upgraded the product's technology stack, ensuring its seamless operation.`}
      </p>
    ),
    slug: 'taskworld',
    problem: (
      <p className="text-base [&:not(:last-child)]:mb-4">
        {`Taskworld is assembling a team dedicated to developing a significant new feature that will transform the functionality of its application. The team is also tasked with updating the application's technology stack to a more stable version.`}
      </p>
    ),
    solution: (
      <>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`To enhance the development of the feature, our team embarked on a meticulous two-week planning phase. Initially, we crafted an Entity-Relationship Diagram (ERD) to outline the new models required for the feature and their interconnections with the existing models within the application. Subsequently, we pinpointed the segments of code that would be influenced by our modifications. This phase involved a thorough examination of the implementation strategies needed to both integrate the new feature and amend the impacted code segments. We meticulously documented these insights, ensuring the document was accessible for commentary by our team members and could serve as a reference point for other teams if needed.`}
        </p>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`Upon completing the identification process, we proceeded to delineate the necessary tasks within an Agile Scrum framework to actualize the feature. My assigned responsibilities were foundational to the feature's development, encompassing the creation of essential endpoints. Moreover, I was tasked with refining our JWT token strategy to encompass the new feature within our microservice architecture. This entailed updating our legacy API to accommodate the new JWT token parameters.`}
        </p>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`A significant aspect of our project involved technological upgrades, notably the transition of MongoDB from version 3 to version 5. Anticipating considerable adjustments due to this major version leap, we proactively identified potential breaking changes that could impact our application. My focus was to manage the transition meticulously for each service affected. Additionally, I spearheaded the upgrade of Socket.io from version 3 to version 4, a critical update requiring special attention due to its widespread use in our service communication with the frontend. This comprehensive approach ensured a seamless integration of the new features and upgrades, minimizing disruption to our existing application flow and enhancing user experience.`}
        </p>
      </>
    ),
    websiteLink: '/taskworld-banner-v1.png',
    roles: ['Software Engineer'],
    banner: '/taskworld-banner-v1.png',
  },
  lanturn: {
    title: 'Lanturn',
    techStack: ['React', 'Material UI', 'NodeJS', 'ExpressJS', 'PostgreSQL'],
    thumbnail: '/lanturn-banner-v1.png',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a software engineer at Lanturn, I played a crucial role in the team tasked with developing and crafting complex queries for use in graphs and statistics, enhancing the analytical capabilities of our applications.`}
      </p>
    ),
    slug: 'lanturn',
    problem: (
      <p className="text-base [&:not(:last-child)]:mb-4">
        {`Lanturn is in the process of assembling a team dedicated to developing a new investment fund management system.`}
      </p>
    ),
    solution: (
      <>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`In addition to crafting features for the application, I've focused on several key areas. I've developed the entire suite for the investment graphs, ensuring the output of highly precise financial data. Additionally, I've constructed the Two-Factor Authentication system from scratch, enhancing security and user trust.`}
        </p>
      </>
    ),
    websiteLink: 'https://www.lanturn.com/',
    roles: ['Software Engineer'],
    banner: '/lanturn-banner-v1.png',
  },
  homepass: {
    title: 'Homepass',
    techStack: ['React', 'TypeScript', 'NodeJS', 'ExpressJS', 'Hapi', 'MongoDB', 'Material UI', 'React Native', 'AWS'],
    thumbnail: '/homepass-banner-v1.png',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a software engineer at Homepass (a part of Domain), I was integral to the team focused on developing and maintaining the system's architecture during peak usage periods. Additionally, I contributed to the integration of a new feature designed to seamlessly connect users with other products offered by Domain.`}
      </p>
    ),
    slug: 'homepass',
    problem: (
      <p className="text-base [&:not(:last-child)]:mb-4">
        {`The Homepass team is currently seeking an additional Software Engineer to enhance their application's performance. This role involves not only refining the app but also overseeing its operation during peak periods, identifying, and resolving any emerging issues.`}
      </p>
    ),
    solution: (
      <>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`As part of the Homepass team, our responsibilities include addressing client data issues. We possess comprehensive analyses and solutions for issues that may recur. Should we encounter a new problem, our approach involves thorough investigation to determine the cause. Given the extensive communication between our application and various third-party APIs, this typically requires us to sift through substantial data logs to pinpoint the problem, replicate it, and then resolve it—whether it's a data inconsistency or a bug within our codebase. Upon resolution, we meticulously document the problem and the steps taken to resolve it, ensuring preparedness for any future occurrences.`}
        </p>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`Additionally, we are tasked with integrating a new authentication system that facilitates client connection to one of the Domain APIs. This advanced authentication ensures that clients who have utilized a product offered by Domain and are in sync with Homepass will be seamlessly integrated into our application.`}
        </p>
      </>
    ),
    websiteLink: 'https://www.homepass.com/',
    roles: ['Software Engineer'],
    banner: '/homepass-banner-v1.png',
  },
  leagueally: {
    title: 'LeagueAlly',
    techStack: ['Angular 1', 'React', 'Material UI', 'NextJS', 'ExpressJS', 'RethingDB', 'AWS'],
    thumbnail: '/leagueally-banner-v1.png',
    shortDescription: (
      <p className="text-sm font-body leading-snug">
        {`As a full-stack developer at LeagueAlly, I assumed the leadership role in not only introducing new features and maintaining the system but also in driving the latest revision of LeagueAlly with React. My efforts culminated in optimizing the system performance by up to 50%, significantly enhancing efficiency and user experience.`}
      </p>
    ),
    slug: 'leagueally',
    problem: (
      <p className="text-base [&:not(:last-child)]:mb-4">
        {`LeagueAlly faced substantial performance issues with their entire application, necessitating brief downtimes to restart the server. Additionally, the company has plans to fundamentally rebuild its application from scratch, prompted by the fact that the technology stack it currently relies on is no longer supported with updates.`}
      </p>
    ),
    solution: (
      <>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`The previous developers left behind two major flaws in the design. Firstly, each REST endpoint initiated a database connection that remained open post-operation, leading to an accumulation of orphaned connections and a consequent increase in memory usage. Temporarily, server restarts were necessary to mitigate this issue. Secondly, the queries employed were not optimized for handling larger datasets, resulting in prolonged fetch times.`}
        </p>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`Given the fundamental issues with the underlying code, a substantial overhaul was imperative to rectify these problems. Despite the significant effort required, the advantages of undertaking this overhaul were deemed to outweigh the drawbacks. This comprehensive revision not only addressed the two critical issues but also streamlined the codebase, significantly enhancing readability and simplifying bug resolution. Furthermore, by optimizing the application's key features, I was able to boost its performance by up to 50%, much to the client's satisfaction.`}
        </p>
        <p className="text-base [&:not(:last-child)]:mb-4">
          {`For the subsequent phase, which involved a complete application overhaul, I opted for NextJS for the front end and ExpressJS for the backend, keeping in mind the necessity for a backend capable of supporting a microservices architecture to efficiently manage increased traffic volumes. Additionally, I developed a boilerplate for the various services within the application, ensuring a robust foundation for future development and scalability.`}
        </p>
      </>
    ),
    websiteLink: 'https://yourleagueally.com/',
    roles: ['Full Stack Developer'],
    banner: '/leagueally-banner-v1.png',
  },
};
