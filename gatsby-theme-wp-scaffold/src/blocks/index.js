import React from 'react';
import Core from './core';
import supportedBlocks from './supported';

const BlockComponent = ({ name, attributes }) => {
  if ( ! name || ! supportedBlocks.includes(name) ) {
    return null;
  }

  const Block  = Core[name];
  return <Block {...attributes} />;
}

export default ({ json }) => {
  const blocks = JSON.parse(json);
  return blocks && blocks.map((block, index) => <BlockComponent key={`${block.postId}-${block.name}-${index}`} {...block} />);
}
