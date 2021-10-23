import { ELEMENT_TYPES } from "../utils/Types";

export const one = {
    name: "col-4-12",
    layout: {
        cols: [
            {
                width: 4,
                items: [
                    { html: "<h2>Objectivessss</h2>", type: ELEMENT_TYPES.H1 },
                    { html: "<p>write something...</p>", type: ELEMENT_TYPES.BODY }
                ]
            },
            {
                width: 12,
                items: [
                    { html: "<h1>My Resumes</h1>", type: ELEMENT_TYPES.H1 },
                    { html: "<p>write something...</p>", type: ELEMENT_TYPES.BODY }
                ]
            }
        ]
    }
};