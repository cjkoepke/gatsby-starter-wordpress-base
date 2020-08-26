import React from 'react';
import { graphql, Link, PageProps, Page } from 'gatsby';
import { allWpPostType } from '../types/wpgraphql';

export default ({ data }: PageProps) => {
  const {allWpPost: { nodes }}: allWpPostType = data;
  return (
    <div>
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
    </div>
  )
}

export const query = graphql`
  query Home {
    ...AllPosts
  }
`
