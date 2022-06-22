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
      spacing: {
        "100px": "100px",
        "50px": "50px",
        mynav: "90px",
        "474px":"474px",
      },
      width: {
        "420px":"420px",
      },

      maxWidth: {
        "730px": "730px",
      },
      
      fontSize: {
        Welcome: ["74px"],
        Quote: ["34px"],
        AccountIcon:["22px"],
        AboutIcon:["25px"],
      },

      fontFamily: {
        montserrat: ['"Montserrat"'],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-wid     th: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
