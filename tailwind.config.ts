import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C68E59",
        "gold-accent": "#D4AF37",
        "background-light": "#F2F2F0",
        "background-dark": "#050505",
        "surface-light": "#FFFFFF",
        "surface-dark": "#0A0A0A",
        "line-light": "#E5E5E5",
        "line-dark": "#262626",
        "muted-gold": "#8A6E4B",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        stencil: ["'Big Shoulders Stencil Text'", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair-display)", "serif"],
        body: ["var(--font-lora)", "serif"],
        arabic: ["var(--font-noto-kufi-arabic)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
      },
      letterSpacing: {
        widest: '.25em',
      },
      animation: {
        'cinematic': 'cinematic 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        cinematic: {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        }
      },
      boxShadow: {
        'glow': '0 0 25px rgba(212, 175, 55, 0.1)',
      },
      backgroundImage: {
        'noir-texture': "url('https://www.transparenttextures.com/patterns/black-linen.png')",
      },
    },
  },
  plugins: [],
};
export default config;
