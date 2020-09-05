import React, { ReactElement } from 'react';
import HTMLParser from 'react-html-parser';

type LevelsType = 1 | 2 | 3 | 4 | 5 | 6;

const getClasses = (level: LevelsType): string => {
    const classes: string[] = [
        'font-sans',
        'font-bold',
        'text-gray-900',
    ];

    switch ( level ) {
        case 1:
            classes.push('text-6xl');
        case 3:
            classes.push('text-4xl');
        case 4:
            classes.push('text-3xl');
        case 5:
            classes.push('text-2xl');
        case 6:
            classes.push('text-xl');
        case 2:
        default:
            classes.push('text-5xl');
    }

    return classes.join(' ');
}

type HeadingType = {
    level: LevelsType,
    children: any,
    anchor: string,
    content?: string
};

const H: React.FC<HeadingType> = ({ level, children, anchor, ...rest }) => {
    return React.createElement(
        `h${level}`,
        Object.assign({
            id: anchor.length ? anchor : null,
            className: getClasses(level),
        }, rest),
        children
    );
}

const Heading: React.FC<HeadingType> = ({ level, content, ...rest }) => <H level={level} {...rest}>{HTMLParser(content)}</H>;

export default Heading;
