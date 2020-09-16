import { FunctionComponent } from "react";
import CoreBlocks from "./core";

export type BlockLibraryType = {
  [index: string]: FunctionComponent;
};

export default (newBlocks: BlockLibraryType = {}) => ({
  ...CoreBlocks,
  ...newBlocks,
});
