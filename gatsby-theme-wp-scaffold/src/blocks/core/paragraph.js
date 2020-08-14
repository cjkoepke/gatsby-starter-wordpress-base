import React from 'react';
import HTMLParser from 'react-html-parser';

export default ({ dropCap, content }) => <p>{HTMLParser(content)}</p>;
