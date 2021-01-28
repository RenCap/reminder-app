import {SNACKBAR_CLEAR, SNACKBAR_ERROR, SNACKBAR_SUCCESS} from "./actionTypes";

export const showSuccessSnackbar = message => ({type: SNACKBAR_SUCCESS, message});

export const showErrorSnackbar = message => ({type: SNACKBAR_ERROR, message});

export const clearSnackbar = () => ({type: SNACKBAR_CLEAR});