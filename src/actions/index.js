import { ACTIONS } from "./types";
import { BLOCK_TYPE } from "../utils";

const template = {
    name: "col-4-12",
    layout: {
        cols: [
            {
                width: 4,
                blocks: [
                    {
                        type: BLOCK_TYPE.DEFAULT,
                        header: "Header",
                        text: "Aliquam erat volutpat. Aliquam rhoncus ligula sed nisl suscipit faucibus. Phasellus eleifend lorem sed cursus accumsan. Suspendisse condimentum nisi erat, suscipit mollis nisl fringilla at. Maecenas gravida libero non porta laoreet.",
                    }
                ]
            },
            {
                width: 12,
                blocks: [
                    {
                        type: BLOCK_TYPE.DEFAULT,
                        header: "Header",
                        subheader: "Subheader",
                        text: "Aliquam erat volutpat. Aliquam rhoncus ligula sed nisl suscipit faucibus. Phasellus eleifend lorem sed cursus accumsan. Suspendisse condimentum nisi erat, suscipit mollis nisl fringilla at. Maecenas gravida libero non porta laoreet.",
                        labels: ["ReactJs"]
                    },
                    {
                        type: BLOCK_TYPE.DEFAULT,
                        header: "Header",
                        subheader: "Subheader",
                        text: "Aliquam erat volutpat. Aliquam rhoncus ligula sed nisl suscipit faucibus. Phasellus eleifend lorem sed cursus accumsan. Suspendisse condimentum nisi erat, suscipit mollis nisl fringilla at. Maecenas gravida libero non porta laoreet.",
                        labels: ["HTML", "CSS"]
                    }
                ]
            }
        ]
    }
};

export const loadTemplate = (templateToLoad = template) => {
    return {
        type: ACTIONS.LOAD_TEMPLATE,
        payload: templateToLoad
    }
}