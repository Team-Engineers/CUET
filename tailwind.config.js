/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1280px",
        },
      },
      screens: {
        "2xl": "1280px",
      },
      colors: {
        "primary-green": "#30ad1c",
        "primary-white": "#fff",
        "primary-black": "#000000",
        "primary-orange": "#ff6900",
        "primary-blue": "#1778be",
        "primary-light": "#f6faff",
        indigo: "#5648FC",
        darkyellow: "#ffbb64",
        darkcyan: "#80BCBD",
        white: "#fff",
        midnightblue: "#0d0756",
        deepskyblue: "#00d1ff",
        gainsboro: {
          100: "#d9d9d9",
          200: "rgba(217, 217, 217, 0.1)",
        },
        tomato: {
          100: "#ff5c4f",
          200: "#ea4335",
        },
        gray: {
          100: "rgba(0, 0, 0, 0.75)",
          200: "rgba(0, 0, 0, 0.6)",
          300: "rgba(0, 0, 0, 0.5)",
        },
        blueviolet: {
          100: "#5648fc",
          200: "rgba(86, 72, 252, 0.75)",
          300: "rgba(86, 72, 252, 0.8)",
          400: "rgba(86, 72, 252, 0.65)",
        },
        black: "#000",
        thistle: "rgba(204, 198, 248, 0.2)",
        mediumslateblue: {
          100: "#7d6eff",
          200: "rgba(125, 110, 255, 0.09)",
        },
        salmon: {
          100: "#FF6868BF",
          200: "#ff7468",
        },
        // salmon: "#ff7468",
        firebrick: "#cc4236",
        mediumblue: "#1404da",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      fontSize: {
        s: "14px",
        m: "16px",
        l: "18px",
      },
      borderRadius: {
        "lg-3": "18.3px",
        "3xs-2": "9.2px",
        base: "16px",
        xl: "20px",
      },
      backgroundImage: {
        bgGradientCustom:
          "linear-gradient(-206.9deg, rgba(0, 209, 255, 0.6) 0.06%, rgba(86, 72, 252, 0.6) 75.11%)",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      "lg-3": "18.3px",
      "3xl": "22px",
      lg: "18px",
      smi: "13px",
      "5xl": "24px",
      lgi: "19px",
      "lgi-2": "19.2px",
      "xs-2": "11.2px",
      "13xl": "32px",
      "7xl": "26px",
      "17xl": "36px",
      "10xl": "29px",
      xl: "20px",
      "21xl": "40px",
      inherit: "inherit",
      s: "14px",
      m: "16px",
      l: "18px",
    },
  },
  daisyui: {
    themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  corePlugins: {
    preflight: false,
  },
  plugins: [require("daisyui")],
};
