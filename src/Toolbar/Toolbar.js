import React, { useState } from "react";
import { ELEMENT_TYPES } from '../utils/Types';
import { Button, Icon } from "semantic-ui-react";

import './Toolbar.css';

export const Toolbar = ({ addEditable }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div style={{ marginTop: '20px' }}>
            <div className="toolbar" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
                {!visible ?
                    <Icon name="plus" style={{ fontSize: '12px', color: 'grey' }} />
                    :
                    <>
                        <Button onClick={() => addEditable("<h1>Heading 1</h1>", ELEMENT_TYPES.H1)}>+ Heading 1</Button>
                        <Button onClick={() => addEditable("<h2>Heading 2</h2>", ELEMENT_TYPES.H2)}>+ Heading 2</Button>
                        <Button onClick={() => addEditable("<p>write something...</p>", ELEMENT_TYPES.BODY)}> +Paragraph</Button>
                    </>
                }
            </div>
        </div>
    );
}