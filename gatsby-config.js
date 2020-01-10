module.exports = {
  siteMetadata: {
    title: `Jinn Wang | Web Development Blog`,
    description: `A front end developer's notes`,
    author: `Jinn Wang`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jinn Wang | Web Development Blog`,
        short_name: `Jinn Wang | Web Development Blog`,
        start_url: `/`,
        background_color: ``,
        theme_color: ``,
        display: `standalone`,
        icon: `src/images/avatar.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases:{js:"javascript"},
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}