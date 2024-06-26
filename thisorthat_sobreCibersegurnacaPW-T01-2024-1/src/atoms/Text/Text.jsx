import React, { createElement } from 'react';
import parse from 'html-react-parser';

export default function Text({ tag, atributes, content }) {

    const htmlParse = parse(`<${tag} ${atributes}>${content}</${tag}>`);

    return (
        <>
            {htmlParse}
        </>
    );
}
