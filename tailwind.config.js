/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-black': 'inset 0 0 10px 5px rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        '1': '1px',
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(to right, #c0c0c0, #dcdcdc)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.border-gradient': {
          position: 'relative',
          zIndex: '0',
        },
        '.border-gradient::before': {
          content: '""',
          position: 'absolute',
          top: '-1px',
          left: '-1px',
          right: '-1px',
          bottom: '-1px',
          zIndex: '-1',
          background: 'linear-gradient(to right, #c0c0c0, #dcdcdc)',
          borderRadius: 'inherit',
        },
      }, ['responsive', 'hover']);
    },
  ],
};

