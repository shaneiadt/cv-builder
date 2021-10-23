import { ELEMENT_TYPES } from "../utils/Types";

export const two = {
    name: "col-16",
    layout: {
        cols: [
            {
                width: 16,
                items: [
                    { html: "<h1>My Resumes</h1>", type: ELEMENT_TYPES.H1 },
                    { html: "<p>write something...</p>", type: ELEMENT_TYPES.BODY }
                ]
            }
        ]
    }
};