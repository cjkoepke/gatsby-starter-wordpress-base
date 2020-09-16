module.exports = ({ baseUrl, sourceOptions: { url, ...rest } }) => {
  return {
    siteMetadata: {
      baseUrl: baseUrl || `gatsby-theme-wordpress-test-data.calvinkoepke.com`,
    },
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-chakra-ui`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${process.cwd()}/src/assets/images/`,
        },
      },
      {
        resolve: `gatsby-source-wordpress-experimental`,
        options: {
          url:
            url ||
            `https://gatsby-theme-wordpress-test-data.calvinkoepke.com/graphql`,
          ...rest,
        },
      },
    ],
  };
};
