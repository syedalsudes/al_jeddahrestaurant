
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Agar aapka folder structure 'src' ke andar hai to:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#540B0E',
          light: '#7E1014',
        },
        accent: {
          red: '#9B2226',
          gold: '#EE9B00',
        },
        warm: {
          white: '#FAF3F0',
        },
        brand: {
          dark: '#1A1A1A',
          muted: '#4A4A4A',
          light: '#FAF3F0',
        }
      },
    },
  },
  plugins: [],
};

export default config;