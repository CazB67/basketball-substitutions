import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '30px': '30px', 
        '20px': '20px',// Custom width for 30px
      },
      minHeight: {
        '60': '60px',
      },
      maxHeight: {
        '60': '60px',
      }
    },
  },
  variants: {
    extend: {
      width: ['responsive'],
    },
  },
  plugins: [],
};
export default config;
