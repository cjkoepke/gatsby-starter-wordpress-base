import { graphql, useStaticQuery } from "gatsby";
import { SiteMetadata } from "../types/gatsby";

export const getSiteMetadata = (): {
  baseUrl: string;
} => {
  const data = useStaticQuery<SiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          baseUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
