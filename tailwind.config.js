/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs:{"max" : "700px"},  
        bs:{"max" : "1100px"},  
        lap:{"max" : "970px"},
        sm:{"max" : "550px"},
        xsm:{"max" : "500px"},
        sv:{"max" : "1000px"},  
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
} 