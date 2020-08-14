require('dotenv').config();

module.exports = ({ sourceOptions: { url, ...rest } }) => {
  return {
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
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
          url: url || `https://demo.wpgraphql.com/graphql`,
          ...rest
        },
      }
    ]
  };
}
