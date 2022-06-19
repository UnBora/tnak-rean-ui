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
        "25px": "25px",
        mynav: "70px",
        "350px":"350px",
      },
      width: {
        "420px":"420px",
      },

      maxWidth: {
        "600px": "600px",
      },

      fontSize: {
        Welcome: ["80px"],
        Quote: ["25px"],
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
  plugins:[require("daisyui")],
};
