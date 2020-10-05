import React from 'react'
import HTMLParser from 'html-react-parser'
import { replacer } from '../../../helpers/transformers'
import { Text } from '@chakra-ui/core'

import { ParagraphAttributes } from './types'

const Paragraph: React.FC<ParagraphAttributes> = ({
  dropCap,
  content,
  anchor,
  id,
  saveContent,
  ...rest
}) => {
  return (
    <Text mb={4} fontSize="md" {...rest} id={anchor || id || null}>
      {HTMLParser(content, {
        replace: replacer,
      })}
    </Text>
  )
}

export default Paragraph
