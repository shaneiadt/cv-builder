import React from "react";
import { ELEMENT_TYPES } from '../App/App';

export const Toolbar = ({ addEditable }) => {
    return (
        <div>
            <button type="button" onClick={() => addEditable("<h1>Heading 1</h1>", ELEMENT_TYPES.H1)}>H1</button>
            <button type="button" onClick={() => addEditable("<h2>Heading 2</h2>", ELEMENT_TYPES.H2)}>H2</button>
            <button type="button" onClick={() => addEditable("<p>write something...</p>", ELEMENT_TYPES.BODY)}>P</button>
        </div>
    );
}