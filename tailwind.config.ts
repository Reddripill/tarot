import type { Config } from "tailwindcss";

export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            main: "#1C153E",
            accent: "#FFDFAF",
         },
         fontFamily: {
            inter: "var(--font-inter)",
            exo: "var(--font-exo)",
         },
         maxWidth: {
            container: "1310px",
         },
         padding: {
            container: "15px",
         },
         boxShadow: {
            header:
               "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
            button:
               "rgba(255, 223, 175, 0.15) 0px 15px 25px, rgba(255, 223, 175, 0.05) 0px 5px 10px;",
         },
         transitionDuration: {
            DEFAULT: "300ms",
         },
      },
   },
   plugins: [],
} satisfies Config;
