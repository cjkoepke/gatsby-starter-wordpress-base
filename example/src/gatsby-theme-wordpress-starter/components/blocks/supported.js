import SupportedBlocks from 'gatsby-theme-wordpress-starter/src/components/blocks/supported';
import CustomBlocks from './custom';

/**
 * Merge the default blocks supported by the theme with your own
 * custom blocks to enable a full library.
 *
 * Override existing supported blocks by shadowing.
 * Example seen in /blocks/core/paragraph.js
 */
export default {
  ...SupportedBlocks,
  custom: CustomBlocks
};
