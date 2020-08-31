import React from 'react';
import HTMLParser from 'react-html-parser';

type HeadingType = {
    level: 1 | 2 | 3 | 4 | 5 | 6,
    children: any,
};

type HeadingAttributeTypes = HeadingType & {
    content: string
}

const H = ({ level, children, ...rest }: HeadingType) => {
    const headingLevel = `h${level}`;
    return React.createElement(
        headingLevel,
        rest,
        children
    );
}

export default ({ level, content, ...rest }: HeadingAttributeTypes) => <H level={level} {...rest}>{HTMLParser(content)}</H>;
