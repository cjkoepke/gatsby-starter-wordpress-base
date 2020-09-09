import React from 'react';
import HTMLParse from 'react-html-parser';
import { transformLinks } from '../../../helpers/transformers';
import classnames from 'classnames';

export type ListAttributeType = {
    anchor?: string,
    ordered: boolean,
    values: string,
    className?: string
}

const List: React.FC<ListAttributeType> = ({ anchor, ordered, values, className, ...rest }) => {
    const tag = ordered ? 'ol' : 'ul';
    const twClasses = [
        'my-10',
        'pl-10',
        'leading-8',
        ordered ? 'list-decimal' : 'list-disc'
    ];
    
    return React.createElement(
        tag,
        { className: classnames(twClasses, className), ...rest },
        HTMLParse(values, { transform: transformLinks })
    );
}

export default List;