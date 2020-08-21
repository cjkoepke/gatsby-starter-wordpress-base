# Gatsby + WP Scaffold

This project aims to create an opinionated boilerplate for building WordPress websites using [GatsbyJS](https://gatsbyjs.com). Among other things, support and methods for this project hinge on:

- Full Gutenberg Library
- Encapsulated components that allow overriding.
- Built on WPGraphQL
- SEO handled by Yoast
- More...

**NOTE: This project is in development and NOT ready for production.**

## Why
WordPress and Gatsby have seen rising popularity lately, as well as the headless WordPress ecosystem. The power and flexibility of Gatsby in particular, as well as it's favorability toward GraphQL and the recent initiative to build a GraphQL Schema directly into WordPress through [WPGraphQL](https://github.com/wp-graphql/wp-graphql), make building a boilerplate obvious and exciting.

### Why CSS-in-JS
I was torn on this. I personally don't like CSS-in-JS, but it has some benefits that felt like they worked well with the project as a whole:

- Ability to isolate components into a relationally-aware package.
- Allows nested targeting, something that CSS Modules usually don't allow.
- Since this theme can inherit a parent/child relationship with users, overriding a component and it's styles in a single file was hard to ignore.
- I've never built anything with CSS-in-JS

All of these reasons and my own curiosity made me choose this approach. If you don't like it, create your own overrides and use a different system!

## Development
This project uses Yarn workspaces for easy development.

1. Clone the project and `cd` into the root directory.
2. Run `yarn install` to install all dependencies.
3. Run `yarn workspace example develop` to start the example site.

## Contribute
This project is in its early stages, but help is greatly appreciated. If you'd like to contribute, fork the project and create a PR with your changes.
