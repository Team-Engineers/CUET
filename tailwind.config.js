/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      lScreens:'769px',
      Laptops:{'max':'1100px'},
      mLaptops:{'max':'900px'},
      tablets:{'max':'768px'},
      mobiles:{'max':'425px'},
      sScreens:{'max':'660px'},
      sMobiles:{'max':'376px'},
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        indigo: "#5648FC",
      },
      backgroundImage: {
        bgGradientCustom:
          "linear-gradient(-206.9deg, rgba(0, 209, 255, 0.6) 0.06%, rgba(86, 72, 252, 0.6) 75.11%)",
      },
    },
  },
  plugins: [],
};
