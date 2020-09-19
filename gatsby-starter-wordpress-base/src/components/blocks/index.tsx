import React from "react";
import allBlocks from "./supported";

import { BlockProps, BlocksProps } from "./types";

export const Block: React.FC<BlockProps> = ({ name, attributes }) => {
  const BlockComponent: React.FC | null = allBlocks[name] || null;
  if (!BlockComponent) {
    return null;
  }

  return <BlockComponent {...attributes} />;
};

const Blocks: React.FC<BlocksProps> = ({ data, json, truncate = false }) => {
  const blocks = data || (json && JSON.parse(json)) || null;

  if (!blocks) {
    return null;
  }

  let moreReached = false;

  return (
    blocks &&
    blocks.map((block, index: number) => {
      if (moreReached) {
        return null;
      }

      if (truncate && "core/more" === block.name) {
        moreReached = true;
      }

      return (
        <Block key={`${block.postId}-${block.name}-${index}`} {...block}>
          {block.innerBlocks && (
            <Blocks data={block.innerBlocks} truncate={truncate} />
          )}
        </Block>
      );
    })
  );
};

export default Blocks;
