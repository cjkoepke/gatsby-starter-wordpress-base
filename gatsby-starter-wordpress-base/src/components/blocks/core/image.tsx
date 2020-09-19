import React from "react";
import HTMLParse from "html-react-parser";
import { transformLinks } from "../../../helpers/transformers";

import { ImageAttributes } from "./types";

const Image: React.FC<ImageAttributes> = ({ url, alt }) => (
  <img src={url} alt={alt} />
);

export default Image;
