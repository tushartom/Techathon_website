/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html', './public/js/*.js'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      colors: {
        "dark": "#F7F7F7",
        "dark-footer": "#0C0B09"
      },
      listStyleType: {
        circle: 'circle',
      },
      backgroundImage: {
        'cta-image': "url('../Assets/Images/cityscape.jpg')",
      },
      height: {
        '2px': '2px',
      }
    },
  },
  plugins: [],
}
