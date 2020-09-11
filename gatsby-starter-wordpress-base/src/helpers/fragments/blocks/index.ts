import { graphql } from 'gatsby';

export const AllBlocks = graphql`
    fragment AllBlocks on WpBlock {
        ...ParagraphBlock
    }
`;