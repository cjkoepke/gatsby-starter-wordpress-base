import React from 'react';
import HTMLParser from 'react-html-parser';
import classnames from 'classnames';
import { transformLinks } from '../../../helpers/transformers';

type LevelsType = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingType = {
    level: LevelsType,
    content: string,
    anchor?: string,
    className?: string
};

const getLevelClass = (level: LevelsType): string => {
    switch ( level ) {
        case 1:
            return 'text-4xl lg:text-6xl';
        case 3:
            return 'text-2xl lg:text-4xl';
        case 4:
            return 'text-xl lg:text-3xl';
        case 5:
            return 'text-lg lg:text-2xl';
        case 6:
            return 'text-xl';
        default:
            return 'text-3xl lg:text-5xl';
    }
}

const Heading: React.FC<HeadingType> = ({ level = 1, anchor, className, content, ...rest }) => {
    const twClasses = [
        'font-sans',
        'font-bold',
        'text-gray-900',
        getLevelClass(level)
    ];

    return React.createElement(
        `h${level}`,
        {
            id: anchor || null,
            className: classnames(
                twClasses,
                className
            ),
            ...rest
        },
        HTMLParser(content, { transform: transformLinks })
    );
}

export default Heading;
