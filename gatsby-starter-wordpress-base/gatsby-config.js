module.exports = ({ baseUrl, sourceOptions: { url, ...rest } }) => {
  return {
    siteMetadata: {
      baseUrl: baseUrl || `gatsby-theme-wordpress-test-data.calvinkoepke.com`,
    },
    plugins: [
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
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
          type: {
            Page: {
              beforeChangeNode: ({ remoteNode, actionType }) => {
                if (actionType === `DELETE`) {
                  return
                }
                const newNode = { ...remoteNode }
                console.log(newNode.blocks)
                newNode.customJSON = JSON.stringify(newNode.blocks)
                return { remoteNode: newNode }
              },
            },
          },
          ...rest,
        },
      },
    ],
  }
}
