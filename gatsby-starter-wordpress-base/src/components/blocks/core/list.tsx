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

const List: React.FC<ListAttributeType> = ({ anchor, ordered, values, ...rest }) => {
    const tag = ordered ? 'ol' : 'ul';
    
    return React.createElement(
        tag,
        rest,
        HTMLParse(values, { transform: transformLinks })
    );
}

export default List;