
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,css}', './styles/**/*.{js,jsx,css}'],

  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],

};

