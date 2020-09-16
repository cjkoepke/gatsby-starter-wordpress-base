module.exports = {
  siteMetadata: {
    baseUrl: `gatsby-theme-wordpress-test-data.calvinkoepke.com`,
  },
  plugins: [
    {
      resolve: `gatsby-starter-wordpress-base`,
      options: {
        baseUrl: `gatsby-theme-wordpress-test-data.calvinkoepke.com`,
        sourceOptions: {
          verbose: true,
        },
      },
    },
  ],
};
