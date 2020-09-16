import { FunctionComponent } from "react";
import CoreBlocks from "./core";

export type BlockDefinition = {
  component: FunctionComponent;
  transformerTag?: string | [];
};

export type BlockLibraryType =
  | {
      [index: string]: BlockDefinition;
    }
  | {};

export default (newBlocks: BlockLibraryType = {}) => ({
  ...CoreBlocks,
  ...newBlocks,
});
