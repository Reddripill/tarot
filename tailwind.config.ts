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
         transitionDuration: {
            DEFAULT: "300ms",
         },
      },
   },
   plugins: [],
} satisfies Config;
