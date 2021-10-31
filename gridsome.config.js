// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Jeysen Freedman",
  siteDescription: "lorem ipsum dolor ete marvo bleno dipo",
  siteUrl: process.env.DEPLOY_URL || "https://testurl.test",
  metadata: {
    // meta data for social media, etc. goes here
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./content/blog/**/*.md",
        remark: {
          plugins: [
            [
              "gridsome-plugin-remark-shiki",
              { theme: "nord", skipInline: true },
            ],
          ],
        },
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
          author: {
            typeName: "Author",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        exclude: ["/privacy", "/legal"],
      },
    },
  ],
  templates: {
    BlogPost: "/blog/:series/:slug",
    Tag: "/tag/:id",
    Author: "/author/:id",
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
};
