import Example from './example';

/**
 * Extend the default block library by adding your own custom blocks here. The
 * folder is the namespace, and the name of the block is the component.
 *
 * This will automatically get added to the list when rendering a blockJSON response
 * from GraphQL, and will be rendered if supported.
 */
export default {
  'custom/example': Example
}
