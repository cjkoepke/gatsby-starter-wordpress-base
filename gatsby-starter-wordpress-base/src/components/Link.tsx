import React from "react";
import { getSiteMetadata } from "../helpers/hooks";
import { Link as GatsbyLink } from "gatsby";
import { Link as CoreLink, LinkProps } from "@chakra-ui/core";
import { IoMdOpen } from "react-icons/io";

const Link: React.FC<LinkProps & { to?: string }> = ({
  href,
  to,
  target,
  children,
  ...rest
}) => {
  const styleProps = {
    color: "blue.400",
    fontWeight: "bold",
  };

  const relative = to || 0 === href.indexOf("/");

  if (relative) {
    return (
      <CoreLink as={GatsbyLink} to={to || href} {...styleProps} {...rest}>
        {children}
      </CoreLink>
    );
  }

  const { baseUrl } = getSiteMetadata();
  const url = new URL(href);

  if (url.hostname === baseUrl) {
    return (
      <CoreLink as={GatsbyLink} to={url.pathname} {...styleProps} {...rest}>
        {children}
      </CoreLink>
    );
  } else {
    return (
      <CoreLink
        {...styleProps}
        display="inline-flex"
        alignItems="center"
        href={href}
        isExternal={"_blank" === target}
        {...rest}
      >
        {children}
        <IoMdOpen style={{ marginLeft: "4px" }} />
      </CoreLink>
    );
  }
};

export default Link;
