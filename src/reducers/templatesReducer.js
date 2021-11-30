import { ACTIONS } from "../actions/types";

const INITIAL_STATE = null;

const templatesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.LOAD_TEMPLATE:
            return { ...action.payload }
        case ACTIONS.UPDATE_BLOCK:
            const { columnIndex, blockIndex, block } = action.payload;
            const newState = { ...state };

            newState.layout.cols[columnIndex].blocks[blockIndex] = {
                ...newState.layout.cols[columnIndex].blocks[blockIndex],
                ...block
            };

            return newState;
        default:
            return state;
    }
}

export default templatesReducer;