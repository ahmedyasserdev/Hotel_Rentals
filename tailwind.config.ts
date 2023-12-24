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
        glass : "rgba(255, 255, 255, 0.88)",
      },
      backgroundImage: {
        home_hero_desktop: "url(/hero-desktop.png)",
      
        home_hero_mobile: "url('/hero-mobile.png')",
        home_region_1: "url('/region-1.png')",
        home_region_2: "url('/region-2.png')",
        vase_desktop: "url(/vase-desktop.png)",
        vase_mobile: "url('/vase-mobile.png')",
        about_1 : "url('/about-1.png')",
        about_1_mobile : "url('/about-1-mobile.png')",
        luxury_desktop : "url('/luxury-desktop.svg')",
        luxury_mobile : "url('/luxury-mobile.svg')",

      },
      screens : {
        sm : '567px' ,
        md : "768px" ,
        lg  : "992px" ,
        xl : "1200px" ,
        "2xl" : "1400px" ,
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
