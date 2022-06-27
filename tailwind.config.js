const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
});


module.exports = {
  
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {
      colors: {
        mygreen: "#48AD9B",
        myhovergreen: "#3a9988",
        smoke: "#FAFAFA",
        myorange: "#EE8F49",
        myhoverorange:"#e08440",
        mygray: "#EBEBEB",
        myred: "#FF3E3E",
        bordergray:"#BCBCBC",
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
  plugins:[
    require("daisyui"),
    require('@tailwindcss/line-clamp'),
  ],
};
