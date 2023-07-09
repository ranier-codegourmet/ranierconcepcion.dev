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
    name: 'Case Studies',
    href: '/case-studies',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export const SOCIALS: PageLinksModel[] = [
  {
    name: 'Github',
    href: 'https://github.com/jose-codegourmet',
    isExternal: true,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/joseadrianbuctuanon.dev/',
    isExternal: true,
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/THEGOODSHIT',
    isExternal: true,
  },
  {
    name: 'Dribbble',
    href: 'https://dribbble.com/THEGOODSHIT',
    isExternal: true,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jose-adrian-buctuanon/',
    isExternal: true,
  },
];
