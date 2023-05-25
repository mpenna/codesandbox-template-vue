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
    // https://tailwindcss.com/docs/screens
    // global media query breakpoints can be customized here
    screens: {
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
    // https://tailwindcss.com/docs/customizing-spacing
    // spacing and sizing scale for your project can be customized here
    // spacing: {
    //   '1': '8px',
    //   '2': '12px',
    //   '3': '16px',
    //   '4': '24px',
    //   '5': '32px',
    //   '6': '48px',
    // }
  },
  plugins: [
    require('preline/plugin'),
  ],
}

