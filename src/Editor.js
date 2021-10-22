import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.bubble.css';

export const Editor = ({ template = "" }) => {
    const [html, setHtml] = useState(template);
    const [theme] = useState('bubble');

    const handleChange = (content, delta, source, editor) => {
        console.log({ content, delta, source, editor });
        setHtml(content);
    }

    return (
        <ReactQuill
            theme={theme}
            onChange={handleChange}
            value={html}
            modules={modules}
            formats={formats}
            bounds={'.app'}
        />
    )
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]