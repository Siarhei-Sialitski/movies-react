import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      backgroundImage: {
        header: "url('app/public/images/Header.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
