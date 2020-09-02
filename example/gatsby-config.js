module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-wordpress-starter`,
      options: {
        sourceOptions: {
          verbose: true,
        },
        blocks: {
          'namespace': './path/here'
        }
      }
    }
  ]
}
