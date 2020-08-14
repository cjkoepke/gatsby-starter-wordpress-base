import React from 'react';
import { graphql, Link } from 'gatsby';

export default ({ data: {
  allWpPost: {
    nodes
  }
} }) => {
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
