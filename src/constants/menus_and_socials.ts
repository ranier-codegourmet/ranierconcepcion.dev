export type PageLinksModel = {
  name: string;
  href: string;
  isExternal?: boolean;
  isActive?: boolean;
};

export const MENU: PageLinksModel[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export const SOCIALS: PageLinksModel[] = [
  {
    name: 'Github',
    href: 'https://github.com/ranier-codegourmet',
    isExternal: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ranier-chuck-concepcion-1a0310100/',
    isExternal: true,
  },
];
