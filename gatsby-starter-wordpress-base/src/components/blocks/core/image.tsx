import React from 'react';
import HTMLParse from 'html-react-parser';
import { transformLinks } from '../../../helpers/transformers';

export type ImageAttributeType = {
    align: "left" | "center" | "right";
    alt: string;
    anchor?: string;
    caption?: string;
    href?: string;
    id: number;
    linkClass?: string;
    linkDestination?: string;
    linkTarget?: string;
    rel?: string;
    title?: string;
    url: string;
    originalContent: string;
}

const Image: React.FC<ImageAttributeType> = ({
    originalContent
}) => {
    return (
        <>
            {HTMLParse(originalContent, { replace: transformLinks })}
        </>
    );
}

export default Image;