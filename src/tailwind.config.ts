
import type { Config } from "tailwindcss";
import { container, themeExtensions } from "./tailwind";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container,
    extend: themeExtensions,
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
