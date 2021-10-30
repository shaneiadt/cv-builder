import React from "react";
import { Button } from "semantic-ui-react";

import './Toolbar.css';

export const Toolbar = ({ addEditable }) => {
    return (
        <div className="toolbar">
            <Button onClick={() => addEditable("<h1>Heading 1</h1>")}>+ Heading 1</Button>
            <Button onClick={() => addEditable("<h2>Heading 2</h2>")}>+ Heading 2</Button>
            <Button onClick={() => addEditable("<p>write something...</p>")}> +Paragraph</Button>
        </div>
    );
}