import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        backgroundLight: "var(--backgroundLight)",
      },
      fontFamily: {
        KelsonRegular: ["KelsonRegular", "sans-serif"],
        KelsonBold: ["KelsonBold", "sans-serif"],
        KelsonExtraBold: ["KelsonExtraBold", "sans-serif"],
        KelsonLight: ["KelsonLight", "sans-serif"],
        KelsonExtraLight: ["KelsonExtraLight", "sans-serif"],
        KelsonMedium: ["KelsonMedium", "sans-serif"],
      },
      borderRadius: {
        common: "14px",
      },
    },
  },
  plugins: [],
} satisfies Config;
