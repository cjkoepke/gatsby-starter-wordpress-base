import React from 'react'
import { ColorModeScript, ChakraProvider, Container } from '@chakra-ui/core'

export default ({ children }) => (
  <>
    <ColorModeScript />
    <ChakraProvider resetCSS>
      <Container>{children}</Container>
    </ChakraProvider>
  </>
)
