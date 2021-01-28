import {SNACKBAR_CLEAR, SNACKBAR_ERROR, SNACKBAR_SUCCESS} from "./actionTypes";

const initialState = {
    severity: '',
    open: false,
    message: ''
};

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SNACKBAR_SUCCESS:
            return {
                ...state,
                severity: 'success',
                open: true,
                message: action.message
            };
        case SNACKBAR_ERROR:
            return {
                ...state,
                severity: 'error',
                open: true,
                message: action.message
            };
        case SNACKBAR_CLEAR:
            return {
                ...state,
                open: false
            };
        default:
            return state;
    }
};

export default snackbarReducer;