// tailwind.config.js
const production = process.env.NODE_ENV === 'production'; // or some other env var like NODE_ENV
module.exports = {
  future: { // for tailwind 2.0 compat
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",
      // may also want to include base index.html
    ], 
    enabled: production // disable purge in dev
  },
  plugins: [
    require('tailwindcss-plugins/gradients'),
  ],
  variants: {
    gradients: ['responsive', 'hover'],
  },
  theme: {
    gradients: theme => ({
      'gray-grad': ['30deg', theme('colors.gray.400'), theme('colors.gray.500')],
    }),
},
};