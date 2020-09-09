module.exports = {
  siteMetadata: {
    baseUrl: `gatsby-theme-wordpress-test-data.calvinkoepke.com`
  },
  plugins: [
    {
      resolve: `gatsby-starter-wordpress-base`,
      options: {
        sourceOptions: {
          verbose: true,
        }
      }
    }
  ]
}
