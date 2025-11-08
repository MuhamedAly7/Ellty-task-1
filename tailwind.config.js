/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  safelist: [
    "hover:bg-[url('/checkbox-icon-hover.svg')]",
    "active:bg-[url('/checkbox-icon-active.svg')]",
    "checked:bg-[url('/checkbox-icon-checked.svg')]",
  ],
  plugins: [],
};
