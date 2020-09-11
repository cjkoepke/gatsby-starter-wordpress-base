import React from 'react';
import HTMLParser from 'react-html-parser';
import { transformLinks } from '../../../helpers/transformers';
import classnames from 'classnames';

type PreAttributeTypes = {
    anchor?: string,
    className?: string,
    content: string
};

const Pre: React.FC<PreAttributeTypes> = ({
    anchor,
    className,
    content,
    ...rest
}) => {
    const twClasses = [
        'bg-gray-100',
        'rounded-md',
        'border-2',
        'border-gray-400',
        'p-8',
        'overflow-scroll'
    ];

    return (
        <pre className={classnames(twClasses, className)} {...rest}>
            {HTMLParser(content, { transform: transformLinks })}
        </pre>
    )
};

export default Pre;