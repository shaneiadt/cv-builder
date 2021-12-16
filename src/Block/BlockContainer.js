import React from "react";
import { useDrop } from "react-dnd";
import { connect } from "react-redux";

import { moveBlock } from "../actions";
import { BLOCK_TYPE } from "../utils";

function BlockContainer({ columnIndex, blockIndex, children, moveBlock }) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: BLOCK_TYPE.DEFAULT,
        drop: (item) => moveBlock([columnIndex, blockIndex], item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }), [columnIndex, blockIndex]);

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
            }}
        >
            {children}
            {isOver && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        outline: '1px dashed black'
                    }}
                />
            )}
        </div>
    );
}

export default connect(null, { moveBlock })(BlockContainer);