/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      montserrat: ['Montserrat'],
    },
    backgroundImage: {
      header: "url('/public/images/Header.png')",
    },
  },
};
export const plugins = [];
