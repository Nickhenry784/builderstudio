module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#6201EA',
        'primary-color-opacity-1': '#B388FF',
        'primary-color-opacity-2': '#F3EBFF',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1.1)' },
        },
        wiggleborder: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      spacing: {
        128: '62rem',
        38: '38rem',
        '15rem': '15rem',
        '25rem': '25rem',
        '32rem': '32rem',
        '21rem': '21rem',
      },
      animation: {
        wiggle: 'wiggle 3s ease-in infinite',
        wiggleborder: 'wiggleborder 3s ease-in infinite',
      },
    },
  },
  plugins: [],
};
