import React from 'react';
import HTMLParser from 'react-html-parser';

type ParagraphAttributeTypes = {
    dropCap: boolean,
    content: string
};

export default ({ dropCap, content }: ParagraphAttributeTypes) => <p>{HTMLParser(content)}</p>;
