import React from 'react';
import HTMLParser from 'react-html-parser';
import { transformLinks } from '../../../helpers/transformers';
import classnames from 'classnames';

export type ParagraphAttributeType = {
    dropCap: boolean,
    content: string,
    anchor: string,
    className: string
};

const Paragraph: React.FC<ParagraphAttributeType> = ({ dropCap, content, anchor, className, ...rest }) => {
    const twClasses = [
        'text-lg',
        'leading-6',
        'mb-4',
    ];

    return (
        <p {...rest} className={classnames(twClasses, className)} id={anchor || null}>
            {HTMLParser(content, {
                transform: transformLinks
            })}
        </p>
    );
}

export default Paragraph;
