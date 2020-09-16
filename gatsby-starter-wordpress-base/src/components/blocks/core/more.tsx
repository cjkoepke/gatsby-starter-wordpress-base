import React from "react";
import classnames from "classnames";

export type MoreAttributesType = {
  noTeaser: boolean;
  className?: string;
  anchor?: string;
};

const More: React.FC<MoreAttributesType> = ({
  noTeaser,
  className,
  anchor,
  ...rest
}) => (
  <hr
    className={classnames(`border-1 border-color-gray-300 my-8`, className)}
    id={anchor || null}
    {...rest}
  />
);

export default More;
