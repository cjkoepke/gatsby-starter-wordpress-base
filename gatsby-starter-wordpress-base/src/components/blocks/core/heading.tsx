import React from 'react';
import HTMLParser from 'react-html-parser';
import classnames from 'classnames';
import { ClassValue } from 'classnames/types';

type LevelsType = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingType = {
    level: LevelsType,
    children: any,
    anchor: string,
    content?: string,
    className?: string
};

const getLevelClass = (level: LevelsType): string => {
    switch ( level ) {
        case 1:
            return 'text-6xl';
        case 3:
            return 'text-4xl';
        case 4:
            return 'text-3xl';
        case 5:
            return 'text-2xl';
        case 6:
            return 'text-xl';
        default:
            return 'text-5xl';
    }
}

const H: React.FC<HeadingType> = ({ level, children, anchor, className, ...rest }) => {
    return React.createElement(
        `h${level}`,
        Object.assign({
            id: anchor.length && 'string' === typeof anchor ? anchor : null,
            className: classnames(
                'font-sans',
                'font-bold',
                'text-gray-900',
                getLevelClass(level),
                className
            ),
        }, rest),
        children
    );
}

const Heading: React.FC<HeadingType> = ({ level, content, ...rest }) => <H level={level} {...rest}>{HTMLParser(content)}</H>;

export default Heading;
