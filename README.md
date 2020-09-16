# Gatsby Starter WordPress Base (GSWB)

## Description

This project aims to create an opinionated boilerplate for building WordPress websites using [GatsbyJS](https://gatsbyjs.com). Among other things, support and methods for this project hinge on:

- Core Gutenberg library support
- Theme shadowing allows a parent/child theme development experience
- Override or extend existing Core Gutenberg library support
- Uses [Chakra UI](https://chakra-ui.com/) for components
- Built on WPGraphQL and Gutenberg
- SEO handled by Yoast
- Support for TypeScript
- Simple configuration

### Dependencies

This project relies on a few plugins and technologies:

#### Gatsby

Directory: `/gatsby-starter-wordpress-base`

- `react`
- `react-dom`
- `deepmerge`
- `gatsby`
- `gatsby-plugin-postcss`
- `gatsby-plugin-sharp`
- `gatsby-transformer-sharp`
- `gatsby-source-filesystem`
- `gatsby-source-wordpress-experimental`
- `gatsby-plugin-chakra-ui`
- `prettier`
- `typescript`

#### WordPress

- [Gatsby](https://wordpress.org/plugins/wp-gatsby/)
- [WPGraphQL](https://github.com/wp-graphql/wp-graphql)
- [WPGraphQL Gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg)
- [WPGraphQL Yoast](https://github.com/ashhitch/wp-graphql-yoast-seo) (optional)
- [Yoast SEO](https://wordpress.org/plugins/wordpress-seo/) (optional)

## How to use this theme

If you want to just use the starter theme, follow the [example site](https://github.com/cjkoepke/gatsby-starter-wordpress-base/tree/master/example) instructions.

## How to develop locally

For development purposes, this theme uses `yarn`. Here's [the documentation for switching package managers](/docs/gatsby-cli/#how-to-change-your-default-package-manager-for-your-next-project) in addition to the `yarn`-based instructions.

1. Clone the entire repo.
2. Run `yarn install`
3. Run `yarn workspace example develop`
4. Begin editing the local package in `/gatsby-starter-wordpress-base`!

## How to contribute

1. Fork this repo
2. Follow the instructions above for developing locally
3. Make your changes on a new branch
4. Submit a PR on the [main project](https://github.com/cjkoepke/gatsby-starter-wordpress-base) with your changes.
