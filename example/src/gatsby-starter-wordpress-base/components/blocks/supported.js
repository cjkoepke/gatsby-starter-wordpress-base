import blockLibrary from 'gatsby-starter-wordpress-base/src/components/blocks/supported';
import CustomBlocks from './custom';

/**
 * Extend the default blocks supported by the theme with your own
 * custom blocks to enable a full library.
 *
 * To override existing supported blocks by shadowing,
 * see the `Paragraph` block in /blocks/core/paragraph.js
 */
export default blockLibrary(CustomBlocks);
