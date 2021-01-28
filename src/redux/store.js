import {combineReducers, createStore} from "redux";

import snackbar from "./snackbarReducer";

export default createStore(combineReducers({snackbar}));