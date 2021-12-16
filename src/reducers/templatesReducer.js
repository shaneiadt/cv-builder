import { ACTIONS } from "../actions/types";

const INITIAL_STATE = null;

const templatesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.LOAD_TEMPLATE: {
            return { ...action.payload }
        }
        case ACTIONS.UPDATE_BLOCK: {
            return update(state, action.payload);
        }
        case ACTIONS.MOVE_BLOCK: {
            const newState = { ...state };
            const { fromPos, toPos } = action.payload;
            console.log(fromPos, toPos);

            const block = { ...newState.layout.cols[fromPos[0]].blocks[fromPos[1]] };

            // const replacedBlock = newState.layout.cols[toPos[0]].blocks.splice(toPos[1], 1, oldBlock);

            const updatedState = update(state, { columnIndex: toPos[0], blockIndex: toPos[1], block });

            console.log({ updatedState });

            return updatedState;
        }
        default:
            return state;
    }
}

const update = (state, payload) => {
    const { columnIndex, blockIndex, block } = payload;
    const newState = { ...state };

    newState.layout.cols[columnIndex].blocks[blockIndex] = {
        ...newState.layout.cols[columnIndex].blocks[blockIndex],
        ...block
    };

    return newState;
}

export default templatesReducer;