import React from 'react';
import HTMLParser from 'react-html-parser';

type LevelsType = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingType = {
    level: LevelsType,
    children: any,
    anchor: string,
    content: string
};

const getClasses = (level: LevelsType ): string => {
    const classes: string[] = [
        'font-sans',
        'font-bold',
        'text-gray-900',
    ];

    switch ( level ) {
        case 1:
            return [...classes, 'text-6xl'].join(' ');
        case 2:
        default:
            return [...classes, 'text-5xl'].join(' ');
        case 3:
            return [...classes, 'text-4xl'].join(' ');
        case 4:
            return [...classes, 'text-3xl'].join(' ');
        case 5:
            return [...classes, 'text-2xl'].join(' ');
        case 6:
            return [...classes, 'text-xl'].join(' ');
    }
}

const H = ({ level, children, anchor, ...rest }: HeadingType) => {
    return React.createElement(
        `h${level}`,
        Object.assign({
            id: anchor.length ? anchor : null,
            className: getClasses(level),
        }, rest),
        children
    );
}

export default ({ level, content, ...rest }: HeadingType) => <H level={level} {...rest}>{HTMLParser(content)}</H>;
