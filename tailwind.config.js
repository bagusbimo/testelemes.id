const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        headings: [
          "64px",
          {
            lineHeight: "64px",
          },
        ],
        subHeadings: [
          "38px",
          {
            lineHeight: "50px",
          },
        ],
        navText: ["14px", "22px"],
        badgeText: ["8px", "14px"],
      },
      colors: {
        "primary-green": "#8BAC3E",
        "primary-dark": "#333333",
        "fade-green": "#F9FFF6",
        "subtitle-grey": "#757575",
        "button-grey": "#F2F2F2",
      },
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },
      stroke: ["hover", "focus"],
      backgroundImage: (theme) => ({
        home: "url('/assets/img/bg.png')",
      }),
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
