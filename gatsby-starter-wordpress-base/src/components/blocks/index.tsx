import React, { ReactElement, FunctionComponent } from "react";
import allBlocks from "./supported";

export const Block: React.FC<{
  name: string;
  attributes: object;
  savedContent: string;
}> = ({ name, attributes, savedContent }): ReactElement | null => {
  const BlockComponent: FunctionComponent | null = allBlocks[name] || null;
  if (!BlockComponent) {
    return null;
  }

  return <BlockComponent {...{...attributes, savedContent}} />;
};

const Blocks: React.FC<{
  data?: string;
  json?: string;
  truncate?: boolean;
}> = ({ data, json, truncate = false }): ReactElement | null => {
  let blocks;

  if ( data ) {
    blocks = data;
  }

  if ( json ) {
    blocks = JSON.parse(json);
  }

  if ( ! blocks ) {
    return null;
  }

  let hitMore = false;
  console.log(blocks)
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
        <Block key={`${block.postId}-${block.name}-${index}`} {...block}>
          {block.innerBlocks && <Blocks data={block.innerBlocks} truncate={truncate} />}
        </Block>
      );
    })
  );
};

export default Blocks;
