import React from 'react';
import Paragraph from 'gatsby-starter-wordpress-base/src/components/blocks/core/paragraph'

/**
 * Import the original component (above), if you want to modify it. You can then use it
 * below in your override. You could also completely override it and do your own thing!
 *
 * See more details on shadowing: https://www.gatsbyjs.com/docs/theme-api/#shadowing
 *
 */
export default props => <Paragraph {...props} className={`my-custom-class`} />
