import React, { ReactElement } from 'react';
import CoreBlocks from './core';

type Props = {
  name: string,
  attributes: object
};

export const SupportedBlocks = {
  core: CoreBlocks
};

const Block: React.SFC<Props> = ({ name, attributes }): ReactElement | null => {
  const keys: string[] = Object.keys(SupportedBlocks);
  let BlockComponent = null;
  
  keys.forEach((key: string) => {
    const library = SupportedBlocks[key] || null;
    if ( library[name] ) {
      BlockComponent = library[name];
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
