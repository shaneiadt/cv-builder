import { combineReducers } from "redux";

import templatesReducer from "./templatesReducer";

export default combineReducers({ template: templatesReducer });