/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(168deg, #2A2634 0%, #271A45 100%)",
      },
    },
  },
  plugins: [],
};
