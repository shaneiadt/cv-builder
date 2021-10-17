// Import React dependencies.
import React, { useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

export const Editor = ({ defaultValue }) => {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState(defaultValue)

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={newValue => setValue(newValue)}
        >
            <Editable />
        </Slate>
    )
}