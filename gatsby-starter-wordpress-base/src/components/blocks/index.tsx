import React, { ReactElement } from "react";
import allBlocks, { BlockDefinition } from "./supported";

type Props = {
  name: string;
  attributes: object;
};

const Block: React.FC<Props> = ({ name, attributes }): ReactElement | null => {
  const block: BlockDefinition | null = allBlocks[name] || null;
  if (!block) {
    return null;
  }

  const BlockComponent = block.component;
  return <BlockComponent {...attributes} />;
};

export const BlocksFromJSON: React.FC<{
  json: string;
}> = ({ json }) => {
  const blocks = JSON.parse(json);
  return (
    blocks &&
    blocks.map((block, index: number) => {
      return (
        <Block key={`${block.postId}-${block.name}-${index}`} {...block} />
      );
    })
  );
};

export default Block;
