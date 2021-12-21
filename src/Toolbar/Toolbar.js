import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";

import './Toolbar.css';
import { addBlock } from "../actions";

const Toolbar = ({ addBlock, columnIndex }) => {
    return (
        <div className="toolbar">
            <Button onClick={() => addBlock(columnIndex)}>+ Add Block</Button>
        </div>
    );
}

export default connect(null, { addBlock })(Toolbar);