import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
        maroon: {
          DEFAULT: 'var(--primary-maroon)',
          light: 'var(--primary-maroon-light)',
        },
        accent: {
          red: 'var(--accent-red)',
          gold: 'var(--accent-gold)',
        },
        warm: {
          white: 'var(--bg-reddish-white)',
        },
        brand: {
          dark: 'var(--text-dark)',
          muted: 'var(--text-muted)',
          light: 'var(--text-light)',
        }
      },
    },
  },
  plugins: [],
};
export default config;
