import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saddle: {
          DEFAULT: "#7A5230",
          50: "#FAF5F0",
          100: "#F0E4D6",
          200: "#DBBFA1",
          300: "#C49A6E",
          400: "#9E6E42",
          500: "#7A5230",
          600: "#634327",
          700: "#4C331E",
          800: "#352414",
          900: "#1F150B",
        },
        sage: {
          DEFAULT: "#6B7F5E",
          50: "#F4F6F2",
          100: "#E3E8DF",
          200: "#C7D1BF",
          300: "#A6B59B",
          400: "#889C7B",
          500: "#6B7F5E",
          600: "#56674C",
          700: "#414E3A",
          800: "#2C3527",
          900: "#171C14",
        },
        bark: {
          DEFAULT: "#1E1A16",
          50: "#F5F4F3",
          100: "#E8E6E4",
          200: "#D0CCC8",
          300: "#A9A39C",
          400: "#7A7269",
          500: "#4A4339",
          600: "#342E27",
          700: "#28231D",
          800: "#1E1A16",
          900: "#0F0D0B",
        },
        cream: {
          DEFAULT: "#F6F2EC",
          50: "#FDFCFB",
          100: "#FAF8F5",
          200: "#F6F2EC",
          300: "#EDE5D9",
          400: "#E0D4C3",
          500: "#C9B9A3",
        },
      },
      fontFamily: {
        heading: ['"Archivo"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        body: ['"IBM Plex Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-up-d1': 'fadeUp 0.6s 0.1s ease forwards',
        'fade-up-d2': 'fadeUp 0.6s 0.2s ease forwards',
        'fade-up-d3': 'fadeUp 0.6s 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
