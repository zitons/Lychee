/*
 * @Date: 2025-02-20
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-21
 * @FilePath: /AisCai-Lab/tailwind.config.ts
 * Helllllloo
 */
import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    container: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
