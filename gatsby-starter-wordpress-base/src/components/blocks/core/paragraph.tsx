import React, { ReactElement } from 'react';
import HTMLParser from 'react-html-parser';

type ParagraphAttributeTypes = {
    dropCap: boolean,
    content: string,
    anchor: string
};

const Paragraph: React.FC<ParagraphAttributeTypes> = ({ dropCap, content, anchor, ...rest }) => (
    <p {...rest} id={anchor ? anchor : null}>
        {HTMLParser(content)}
    </p>
);

export default Paragraph;
