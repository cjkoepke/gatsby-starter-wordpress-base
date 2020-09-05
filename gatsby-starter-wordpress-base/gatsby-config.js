module.exports = ({ sourceOptions: { url, ...rest } }) => {
  return {
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-postcss`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${process.cwd()}/src/assets/images/`
        }
      },
      {
        resolve: `gatsby-source-wordpress-experimental`,
        options: {
          url: url || `https://gatsby-theme-wordpress-test-data.calvinkoepke.com/graphql`,
          ...rest
        },
      },
    ]
  };
}
