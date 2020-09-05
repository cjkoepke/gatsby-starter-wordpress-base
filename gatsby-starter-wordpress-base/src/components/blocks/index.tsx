import React, { ReactElement, FunctionComponent } from 'react';
import allBlocks from './supported';

type Props = {
  name: string,
  attributes: object
};

const Block: React.FC<Props> = ({ name, attributes }): ReactElement | null => {
  const BlockComponent: FunctionComponent | null = allBlocks[name] || null;
  if ( ! BlockComponent ) {
    return null;
  }

  return <BlockComponent {...attributes} />;
};

export const BlocksFromJSON: React.FC<{
  json: string
}> = ({ json }) => {
  const blocks = JSON.parse(json);
  console.log(blocks)
  return blocks && blocks.map(
    (block, index: number) =>
      <Block key={`${block.postId}-${block.name}-${index}`} {...block} />
  );
};

export default Block;
