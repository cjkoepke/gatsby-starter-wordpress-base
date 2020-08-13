require('dotenv').config();

module.exports = ({ url }) => {
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
          verbose: true,
          develop: {
            hardCacheMediaFiles: true,
          },
          debug: {
            graphql: {
              writeQueriesToDisk: true,
            },
          }
        },
      }
    ]
  };
}
