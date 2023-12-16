import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#5B656F",
          2: "#8998A6",
          3: "#DFE3E7",
        },
        secondary: {
          1: "#AB9C85",
          2: "#F5E9D6",
          3: "#F5F3F1",
        },
        dark: "#181D24",
        navBg: "rgba(3, 3, 3, 0.20)",
        gold: "#C9BDAB",
      },
      backgroundImage: {
        home_hero_desktop: "url(/hero-desktop.svg)",
        home_hero_mobile: "url('/hero-mobile.svg')",
      },
      screens : {
        sm : '567px' ,
        md : "768px" ,
        lg  : "992px" ,
        xl : "1200px" ,
        "2xl" : "1400px" ,
      },
    },
  },
  plugins: [],
};
export default config;
