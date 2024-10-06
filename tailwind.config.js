// tailwind.config.js
export const theme = {
  extend: {
    keyframes: {
      "shine-pulse": {
        "0%": {
          "background-position": "0% 0%",
        },
        "50%": {
          "background-position": "100% 100%",
        },
        to: {
          "background-position": "0% 0%",
        },
      },
    },
  },
  content: [
    './pages/*/.{html,js}',
    './components/*/.{html,js}',
  ],
};
