# Example Site
This serves as a starting base for child themes to use the GSWB theme as their starter.

In your main `gatsby-config.js` file, all you need is:

```js
module.exports = {
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
```

## Available options
This theme uses the `gatsby-source-wordpress-experimental` plugin under the hood. You can pass in your own parameters to that plugin under `options.sourceOptions`. For a full list of options, see the [original source plugin documentation](https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/blob/master/docs/plugin-options.md).

## When do I use this starter theme?
Use this starter theme anytime you want to bootstrap a new WordPress Gatsby theme with as little configuration as possible.

## Examples of usage
1. [Override Starter Theme Components](https://github.com/cjkoepke/gatsby-starter-wordpress-base/blob/master/example/src/gatsby-starter-wordpress-base/components/blocks/core/paragraph.js)
2. [Extend Starter Theme Components](https://github.com/cjkoepke/gatsby-starter-wordpress-base/blob/master/example/src/gatsby-starter-wordpress-base/components/blocks/supported.js)
3. More soon...

## Main Starter Theme Contributions
To contribute to the main starter theme, or run this example site demo, see the [main repository instructions](https://github.com/cjkoepke/gatsby-starter-wordpress-base).
