import React from 'react'
import HTMLParser from 'html-react-parser'
import { replacer } from '../../../helpers/transformers'
import { Box } from '@chakra-ui/core'

import { VerseAttributes } from './types'

const Verse: React.FC<VerseAttributes> = ({
  anchor,
  id,
  content,
  saveContent,
  ...rest
}) => {
  return (
    <Box
      p={8}
      borderWidth={1}
      borderColor="gray.300"
      whiteSpace="pre-wrap"
      position="relative"
      as="pre"
      id={anchor || id || null}
      fontFamily="body"
      fontStyle="italic"
      {...rest}
    >
      {HTMLParser(content, { replace: replacer })}
    </Box>
  )
}

export default Verse
