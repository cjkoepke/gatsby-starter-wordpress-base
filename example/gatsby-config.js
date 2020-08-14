module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-wp-scaffold`,
      options: {
        sourceOptions: {
          url: `https://blog.calvinkoepke.com/graphql`,
          verbose: true
        }
      }
    }
  ]
}
