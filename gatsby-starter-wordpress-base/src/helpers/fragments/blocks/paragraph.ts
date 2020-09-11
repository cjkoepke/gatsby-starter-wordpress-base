import { graphql, GatsbyGraphQLObjectType } from 'gatsby';

export const AllBlocks = graphql`
  fragment ParagraphBlockAttributes on WpCoreParagraphBlockAttributes {
    align
    anchor
    backgroundColor
    className
    content
    direction
    dropCap
    fontSize
    placeholder
    style
    textColor
  }

  fragment ParagraphBlock on WpCoreParagraphBlock {
    type: __typename
    name
    dynamicContent
    saveContent
    attributes {
      ...ParagraphBlockAttributes
    }
  }
`