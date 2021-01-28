import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";

import {clearSnackbar} from "../redux/snackbarActions";

export const GlobalSnackbar = () => {
    const dispatch = useDispatch();
    const {open, message, severity} = useSelector(state => state.snackbar);

    const handleClose = () => {
        dispatch(clearSnackbar());
    };

    return <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
                     anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
        <Alert onClose={handleClose} severity={severity}>
            {message}
        </Alert>
    </Snackbar>;
};