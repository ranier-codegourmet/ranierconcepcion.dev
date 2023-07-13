export const BTN_BASE_CLASS = `
  px-10
  py-4
  w-auto
  font-body
  border-[1px]
  border-solid
  border-transparent
  bg-opacity-100
  transition
  ease-in-out
`;

export const MUTED = `
  btn--muted
  bg-neutral-300
  text-neutral-600
  border-color-black
  hover:bg-opacity-5
  hover:text-black
  border-none

  dark:bg-white
  dark:bg-opacity-5
  dark:text-white
  dark:hover:bg-opacity-10
  dark:hover:text-white
  dark:hover:border-white
`;

export const NORMAL = `
  btn--normal
  bg-black
  text-white
  border-color-black
  hover:bg-opacity-5
  hover:text-black
  border-2
  border-solid
  border-black

  dark:bg-white
  dark:text-black
  dark:hover:bg-opacity-10
  dark:hover:text-white
  dark:hover:border-white
`;

export const SPECIAL = `
  btn--special
  bg-gradient-to-r
  from-green-400
  to-blue-500
  text-white
  border-color-transparent
`;
