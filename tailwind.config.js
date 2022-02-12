module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],

  daisyui: {
    styled: true,
    themes: [
      'bumblebee',
      'halloween',
      'cupcake'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
