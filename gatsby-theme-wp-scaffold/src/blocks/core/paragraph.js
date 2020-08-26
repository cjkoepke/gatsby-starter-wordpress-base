import React from 'react';
import HTMLParser from 'react-html-parser';
import { ParagraphAttributeTypes } from '../../types/gutenberg';

export default ({ dropCap, content }: ParagraphAttributeTypes) => <p>{HTMLParser(content)}</p>;
