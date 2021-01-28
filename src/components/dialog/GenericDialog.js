import * as PropTypes from "prop-types";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

const GenericDialog = ({children, onCloseDialog, onConfirmDialog, open, submitDisabled, title}) => {

    return (
        <Dialog open={open}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onCloseDialog}>Cancel</Button>
                <Button disabled={submitDisabled} onClick={onConfirmDialog}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
};

GenericDialog.propTypes = {
    children: PropTypes.any,
    onCloseDialog: PropTypes.func,
    onConfirmDialog: PropTypes.func,
    open: PropTypes.bool,
    submitDisabled: PropTypes.bool,
    title: PropTypes.string
};

export default GenericDialog;