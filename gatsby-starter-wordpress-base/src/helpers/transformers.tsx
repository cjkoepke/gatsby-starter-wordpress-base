import React from 'react';
import { Link } from 'gatsby';
import { getSiteMetadata } from './hooks';
import { convertNodeToElement } from 'react-html-parser';

// Block Library
import allBlocks from '../components/blocks/supported';

export const transformLinks: React.FC<{
    type: string,
    name: string,
    children: any,
    attribs: {
        href: string
    }
}> = (props, index) => {
    const { type, name, children, attribs } = props;

    // Catch links.
    if ('tag' === type && 'a' === name ) {
        const { href, ...rest } = attribs;
        const { baseUrl } = getSiteMetadata();
        const url = new URL(href);
        if ( url.hostname === baseUrl ) {
            return (
                <Link key={`${href}-${index}`} to={url.pathname} {...rest}>
                    {children && children.map(child => convertNodeToElement(child, index, transformLinks))}
                </Link>
            );
        }
    }
};