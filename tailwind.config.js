/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#2F2F2F",
        "dark-gray-200": "#3A3A3A",
        "naver-color": "#25CE63",
      },
    },
  },
  plugins: [],
};
