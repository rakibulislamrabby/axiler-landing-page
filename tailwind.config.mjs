/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      container: {
        center: true,
        padding: "150px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        hubot: ["var(--font-hubot-sans)", "sans-serif"],
        // hubot: ["Hubot Sans", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#5055FB",
        primary2: "#1C3765",
        secondary: "#5055FB",
        
      },
    },
  },
  plugins: [],
};
