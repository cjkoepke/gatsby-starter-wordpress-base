import React from 'react';
import { Link } from 'gatsby';
import { getSiteMetadata } from './hooks';
import { convertNodeToElement } from 'react-html-parser';

export const transformLinks: React.FC<{
    type: string,
    name: string,
    children: any,
    attribs: {
        href: string
    }
}> = ({ type, name, children, attribs }, index) => {
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