import React from "react";
import { graphql, PageProps } from "gatsby";
import { allWpPageType } from "../types/wpgraphql";

import Layout from "../layouts";
import Link from "../components/Link";
import Blocks from "../components/blocks";

export default ({ data }: PageProps) => {
  const {
    allWpPage: { nodes },
  }: allWpPageType = data;
  return (
    <Layout>
      <h1>Home!</h1>
      {nodes ? (
        <ul>
          {nodes.map((node) => {
            console.log(JSON.parse(node.blocksJSON));
            return (
              <li key={node.link}>
                <h4>{node.title}</h4>
                <Blocks truncate json={node.blocksJSON} />
                <Link to={node.link}>Read More</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Looks like you need to publish some posts!</p>
      )}
    </Layout>
  );
};

export const query = graphql`
  query Home {
    ...AllPages
  }
`;
