import React from 'react';
import Core from './core';
import supportedBlocks from './supported';

const BlockComponent: React.SFC<{ name: string, attributes: object}> = ({ name, attributes }) => {
  if ( ! name || ! supportedBlocks.includes(name) ) {
    return null;
  }

  const Block  = Core[name];
  return Block ? <Block {...attributes} /> : null;
}

export default ({ json }) => {
  const blocks = JSON.parse(json);
  console.log(blocks);
  return blocks && blocks.map((block, index: number) => <BlockComponent key={`${block.postId}-${block.name}-${index}`} {...block} />);
}
