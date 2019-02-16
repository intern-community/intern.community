module.exports = {
  siteMetadata: {
    title: `intern.community`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-typography`,
      options : {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-113070557-3`,
        optimizeId: `GTM-WJ5FL46`
      }
    }
  ],
};
