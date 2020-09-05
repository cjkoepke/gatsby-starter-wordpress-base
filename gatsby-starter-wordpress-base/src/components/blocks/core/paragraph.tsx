import React from 'react';
import HTMLParser from 'react-html-parser';

export type ParagraphAttributeType = {
    dropCap: boolean,
    content: string,
    anchor: string
};

const Paragraph: React.FC<ParagraphAttributeType> = ({ dropCap, content, anchor, ...rest }) => (
    <p {...rest} id={anchor ? anchor : null}>
        {HTMLParser(content)}
    </p>
);

export default Paragraph;
