/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "700px" },
        ms: { max: "829px" },
        bs: { max: "1100px" },
        lap: { max: "970px" },
        ipad: { max: "900px" },
        sr: { max: "600px" },
        sm: { max: "550px" },
        xsm: { max: "500px" },
        sv: { max: "1000px" },
        mv: { max: "400px" },
       
      },
      colors: {
        'light-gray': '#F9F9F9',
        'navy': '#0D333E',
        'gray': '#E3DFDF',
        'green': '#0FD46C',
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      backgroundImage: {
        "custom-pattern": "url('public/support-page/accordionBg.svg')",
      },
      backgroundColor: {
        "green": "#0FD46C",
        "light-gray": "#F3F2EF",
      },
    },
  },
  plugins: [],
};
