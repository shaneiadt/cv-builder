// Import React dependencies.
import React, { useMemo, useState, useCallback } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

export const Editor = ({ defaultValue }) => {
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])
    const renderElement = useCallback(props => <Element {...props} />, [])
    const [value, setValue] = useState(defaultValue)

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={newValue => setValue(newValue)}
        >
            <Editable
                renderElement={renderElement}
            />
        </Slate>
    )
}

const Element = ({ attributes, children, element }) => {
    switch (element.type) {
        case 'h1':
            return <h1 {...attributes}>{children}</h1>
        case 'title':
        case 'h2':
            return <h2 {...attributes}>{children}</h2>
        case 'paragraph':
        default:
            return <p {...attributes}>{children}</p>
    }
}