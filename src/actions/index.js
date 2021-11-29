import { ACTIONS } from "./types";
import { getTemplates } from "../templates";

const template = getTemplates()[0];

export const loadTemplate = (templateToLoad = template) => {
    return {
        type: ACTIONS.LOAD_TEMPLATE,
        payload: templateToLoad
    }
}