import React, { ReactElement, FunctionComponent } from 'react';
import allBlocks from './supported';

type Props = {
  name: string,
  attributes: object
};

const Block: React.FC<Props> = ({ name, attributes }): ReactElement | null => {
  const BlockComponent: React.FC<any> | null = allBlocks[name] || null;
  if ( ! BlockComponent ) {
    return null;
  }

  return <BlockComponent {...attributes} />;
};

export const BlocksFromJSON: React.FC<{
  json: string
}> = ({ json }) => {
  const blocks = JSON.parse(json);
  return blocks && blocks.map(
    (block, index: number) => {
      console.log(block)
      return <Block key={`${block.postId}-${block.name}-${index}`} {...block} />
    }
  );
};

export default Block;
