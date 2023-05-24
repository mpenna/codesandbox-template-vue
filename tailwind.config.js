/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    // https://tailwindcss.com/docs/customizing-colors#using-custom-colors
    // once defined here, the default TW colors will be all overwritten
    // colors: {
    //   vuejs: "#49e659"
    // },
    extend: {
      // placing them here will have the effect of adding them to the original TW set of colors
      colors: {
        // vuejs: "#49e659"
        // https://www.tailwindshades.com/#color=126.11464968152866%2C75.84541062801932%2C59.411764705882355&step-up=8&step-down=11&hue-shift=0&name=pastel-green&base-stop=5&v=1&overrides=e30%3D
        vuejs: {
          50: '#EAFCEC',
          100: '#D8FADC',
          200: '#B5F5BB',
          300: '#91F09A',
          400: '#6DEB7A',
          500: '#49E659',
          600: '#1ED931',
          700: '#17A826',
          800: '#10761B',
          900: '#094510',
          950: '#062C0A'
        }
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

