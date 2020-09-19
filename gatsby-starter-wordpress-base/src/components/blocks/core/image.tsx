import React from "react";
import parse from "html-react-parser";
import { replacer } from "../../../helpers/transformers";

import { ImageAttributes } from "./types";

const Image: React.FC<ImageAttributes> = ({ url, alt, saveContent }) => (
  <>{parse(saveContent, { replace: replacer })}</>
);

export default Image;
