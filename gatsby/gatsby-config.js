/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nevada`,
    siteUrl: `https://nevadaprojects.com/`,
    description: `Nevada Projects Sitio Web Próximamente`,
    twitterUsername: `@nevada.projects`,
    image: `./src/assets/screenshot.png`,
    author: `nevada`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
        icon: 'src/assets/images/icon.png',
      },
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};