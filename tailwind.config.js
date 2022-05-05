// Tailwindcss configuration file
// https://tailwindcss.com/docs/configuration
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const tailwindForms = require('@tailwindcss/forms')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#8257E5',
          hover: '#996DFF',
        },
      },

      borderRadius: {
        md: '4px',
      },
    },
  },
  plugins: [tailwindForms],
}
