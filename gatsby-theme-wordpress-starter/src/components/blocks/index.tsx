import React, { ReactElement } from 'react';
import supportedBlocks from './supported';

type Props = {
  name: string,
  attributes: object
};

const Block: React.SFC<Props> = ({ name: block, attributes }): ReactElement | null => {
  const namespaces: string[] = Object.keys(supportedBlocks);
  let BlockComponent = null;

  namespaces.forEach((namespace: string) => {
    const library = supportedBlocks[namespace] || null;
    if ( library[block] ) {
      BlockComponent = library[block];
    }
  });

  return null !== BlockComponent ? <BlockComponent {...attributes} /> : null;
};

export const BlocksFromJSON = ({ json }: string): ReactElement[] => {
  const blocks = JSON.parse(json);
  return blocks && blocks.map(
    (block, index: number) =>
      <Block key={`${block.postId}-${block.name}-${index}`} {...block} />
  );
};

export default Block;
