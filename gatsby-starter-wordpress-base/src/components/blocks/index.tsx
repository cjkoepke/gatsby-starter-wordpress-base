import React, { ReactElement, FunctionComponent } from "react";
import allBlocks from "./supported";

export const Block: React.FC<{
  name: string;
  attributes: object;
}> = ({ name, attributes }): ReactElement | null => {
  const BlockComponent: FunctionComponent | null = allBlocks[name] || null;
  if (!BlockComponent) {
    return null;
  }

  return <BlockComponent {...attributes} />;
};

const Blocks: React.FC<{
  json: string;
  truncate?: boolean;
}> = ({ json, truncate = false }): ReactElement => {
  const blocks = JSON.parse(json);
  let hitMore = false;
  return (
    blocks &&
    blocks.map((block, index: number) => {
      if (hitMore) {
        return null;
      }

      if (truncate && "core/more" === block.name) {
        hitMore = true;
      }

      return (
        <Block key={`${block.postId}-${block.name}-${index}`} {...block} />
      );
    })
  );
};

export default Blocks;
