/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Rus Dev",
    description: "Nice and cool portfolio",
    author: "Ruslan",
    titleTemplate: `%s | WebDev Portfolio`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    // `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `efk4sd5lw5f0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        crossOrigin: `use-credentials`,
        // OR
        crossOrigin: pathname =>
          pathname.match(/^\/elevated/) ? `use-credentials` : `anonymous`,
      },
    },
  ],
}
