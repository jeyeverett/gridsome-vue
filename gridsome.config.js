// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jeysen Freedman | Full Stack Web Developer',
  siteDescription: "Jeysen Freedman's personal website",
  siteUrl: process.env.DEPLOY_URL || 'https://www.jeysenfreedman.com',
  // metadata: {
  //   // meta data for social media, etc. goes here
  // },
  icon: 'src/favicon.png',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
};
