import React, { ReactElement } from 'react';
import HTMLParser from 'react-html-parser';

type ParagraphAttributeTypes = {
    dropCap: boolean,
    content: string,
    anchor: string
};

export default ({ dropCap, content, anchor, ...rest }: ParagraphAttributeTypes): ReactElement => (
    <p {...rest} id={anchor ? anchor : null}>
        {HTMLParser(content)}
    </p>
);
