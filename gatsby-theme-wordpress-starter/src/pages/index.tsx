import React from 'react';
import { graphql, Link, PageProps, Page } from 'gatsby';
import { allWpPageType } from '../types/wpgraphql';
import Layout from '../components/layout';

export default ({ data }: PageProps) => {
  const {allWpPage: { nodes }}: allWpPageType = data;
  return (
    <Layout>
      <h1>Home!</h1>
      {nodes
        ? (
          <ul>
            {nodes.map(node => (
              <li key={node.slug}>
                <h4>{node.title}</h4>
                <Link to={node.slug}>Read More</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Looks like you need to publish some posts!</p>
        )}
    </Layout>
  )
}

export const query = graphql`
  query Home {
    ...AllPages
  }
`
