import { BLOCK_TYPE } from "../utils";

const template = {
    name: "col-4-12",
    layout: {
        cols: [
            {
                width: 4,
                blocks: [
                    {
                        id: 1,
                        type: BLOCK_TYPE.AVATAR,
                        image: './avatar.jpg'
                    },
                    {
                        id: 2,
                        type: BLOCK_TYPE.DEFAULT,
                        header: "Header",
                        text: "Aliquam erat volutpat. Aliquam rhoncus ligula sed nisl suscipit faucibus. Phasellus eleifend lorem sed cursus accumsan. Suspendisse condimentum nisi erat, suscipit mollis nisl fringilla at. Maecenas gravida libero non porta laoreet.",
                        labels: []
                    }
                ]
            },
            {
                width: 12,
                blocks: [
                    {
                        id: 3,
                        type: BLOCK_TYPE.DEFAULT,
                        header: "Header 1",
                        subheader: "Subheader",
                        text: "Aliquam erat volutpat. Aliquam rhoncus ligula sed nisl suscipit faucibus. Phasellus eleifend lorem sed cursus accumsan. Suspendisse condimentum nisi erat, suscipit mollis nisl fringilla at. Maecenas gravida libero non porta laoreet.",
                        labels: ["ReactJs"]
                    },
                    {
                        id: 4,
                        type: BLOCK_TYPE.DEFAULT,
                        header: "Header 2",
                        subheader: "Subheader",
                        text: "Aliquam erat volutpat. Aliquam rhoncus ligula sed nisl suscipit faucibus. Phasellus eleifend lorem sed cursus accumsan. Suspendisse condimentum nisi erat, suscipit mollis nisl fringilla at. Maecenas gravida libero non porta laoreet.",
                        labels: ["HTML", "CSS"]
                    }
                ]
            }
        ]
    }
};

export default template;