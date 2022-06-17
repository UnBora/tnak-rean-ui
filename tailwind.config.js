module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        mygreen: "#48AD9B",
        smoke: "#FAFAFA",
        myorange: "#EE8F49",
        mygray: "#EBEBEB",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 1024px) { ... }

        lg: "1280px",
        // => @media (min-wid     th: 1280px) { ... }
      },
      fontFamily: {
        montserrat: ['"Montserrat"'],
      },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
};
