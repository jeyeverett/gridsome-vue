const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.pug",
    "./src/**/*.md",
  ],
  darkMode: "class", // or 'false' or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#1cb7ff",
        DEFAULT: "#1379a8",
        dark: "#08374d",
      },
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "hero-pattern-lg": "url('/images/hero.jpg')",
        "hero-pattern-sm": "url('/images/hero_small.jpg')",
        "hero-pattern-md": "url('/images/hero_medium.jpg')",
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              color: theme("colors.gray.300"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.gray.100"),
              },
              strong: {
                color: theme("colors.gray.100"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.gray.100"),
              },
              h2: {
                color: theme("colors.gray.100"),
              },
              h3: {
                color: theme("colors.gray.100"),
              },
              h4: {
                color: theme("colors.gray.100"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.gray.100"),
              },
              "a code": {
                color: theme("colors.gray.100"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
      opacity: ["dark"],
      filter: ["dark"],
      brightness: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
