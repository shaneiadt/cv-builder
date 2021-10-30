import { ELEMENT_TYPES } from "../utils/Types";

export const one = {
    name: "col-4-12",
    layout: {
        cols: [
            {
                width: 4,
                items: [
                    { content: "./avatar.jpg", type: ELEMENT_TYPES.IMAGE },
                    { content: "<h2>Objectivessss</h2><p>write something...</p>", type: ELEMENT_TYPES.TEXT },
                ]
            },
            {
                width: 12,
                items: [
                    { content: "<h1>My Resumes</h1>", type: ELEMENT_TYPES.TEXT },
                ]
            }
        ]
    }
};