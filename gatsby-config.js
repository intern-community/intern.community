module.exports = {
  siteMetadata: {
    title: 'Intern Community',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options : {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
