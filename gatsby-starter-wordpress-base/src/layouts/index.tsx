import React, { ReactElement } from "react";
import { PageProps } from "gatsby";
import { Container } from "@chakra-ui/core";

const Layout: React.SFC<{ children: any }> = ({
  children,
  pathContext,
}: PageProps): ReactElement => {
  return <Container>{children}</Container>;
};

export default Layout;
