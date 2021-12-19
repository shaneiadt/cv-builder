import { cloneDeep } from "lodash";
import { ACTIONS } from "../actions/types";

const INITIAL_STATE = null;

const templatesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.LOAD_TEMPLATE: {
            return { ...action.payload }
        }
        case ACTIONS.UPDATE_BLOCK: {
            return updateBlock(state, action.payload);
        }
        case ACTIONS.MOVE_BLOCK: {
            const newState = cloneDeep(state);
            const { fromPos, toPos } = action.payload;

            const blockA = { ...state.layout.cols[fromPos[0]].blocks[fromPos[1]] };
            const blockB = { ...state.layout.cols[toPos[0]].blocks[toPos[1]] };

            const stateA = updateBlock(newState, { columnIndex: toPos[0], blockIndex: toPos[1], block: blockA });
            const stateB = updateBlock(stateA, { columnIndex: fromPos[0], blockIndex: fromPos[1], block: blockB });

            const newNewState = cloneDeep(stateB);

            return newNewState;
        }
        default:
            return state;
    }
}

const updateBlock = (state, payload) => {
    const { columnIndex, blockIndex, block } = payload;
    const newState = cloneDeep(state);

    newState.layout.cols[columnIndex].blocks[blockIndex] = { ...block };

    return newState;
}

export default templatesReducer;