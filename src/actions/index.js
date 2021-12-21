import { ACTIONS } from "./types";
import { getTemplates } from "../templates";

const template = getTemplates()[0];

export const loadTemplate = (templateToLoad = template) => {
    return {
        type: ACTIONS.LOAD_TEMPLATE,
        payload: templateToLoad
    }
}

export const updateBlock = (columnIndex, blockIndex, block) => {
    return {
        type: ACTIONS.UPDATE_BLOCK,
        payload: {
            columnIndex,
            blockIndex,
            block
        }
    }
}

export const moveBlock = (toPos, fromPos) => {
    return {
        type: ACTIONS.MOVE_BLOCK,
        payload: {
            fromPos,
            toPos
        }
    }
}

export const addBlock = (columnIndex) => {
    return {
        type: ACTIONS.ADD_BLOCK,
        payload: {
            columnIndex
        }
    }
}

export const removeBlock = (columnIndex, bid) => {
    return {
        type: ACTIONS.REMOVE_BLOCK,
        payload: {
            columnIndex,
            bid
        }
    }
}