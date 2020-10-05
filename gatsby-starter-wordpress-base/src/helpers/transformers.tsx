import React from 'react'
import { domToReact } from 'html-react-parser'

import Link from '../components/Link'
import { Image } from '@chakra-ui/core'

export const replacer = (node) => {
  const { type, name, attribs, children } = node

  // Catch links and replace with Gatsby links.
  if ('tag' === type && 'a' === name) {
    return <Link {...attribs}>{domToReact(children)}</Link>
  }

  // Replace image tags with Chakra UI.
  if ('tag' === type && 'img' === name) {
    return (
      <Image
        src={attribs.src}
        alt={attribs.alt}
        htmlHeight={attribs.height}
        htmlWidth={attribs.width}
      />
    )
  }
}
