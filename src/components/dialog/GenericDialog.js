import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

export const GenericDialog = ({children, onCloseDialog, onConfirmDialog, open, submitDisabled, title}) => {

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