// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Jeysen Freedman",
  siteDescription: "Jeysen Freedman's personal website",
  siteUrl: process.env.DEPLOY_URL || "https://www.jeysenfreedman.com",
  // metadata: {
  //   // meta data for social media, etc. goes here
  // },
  icon: "src/favicon.png",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/blog/**/*.md",
        typeName: "BlogPost",
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
          pillar: {
            typeName: "Pillar",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/projects/*.md",
        typeName: "Project",
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
    BlogPost: "/blog/:pillar/:title",
    Pillar: "/blog/:id",
    Author: "/author/:title__name",
    Tag: "/tag/:id",
    Project: "/projects/:title",
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
};
