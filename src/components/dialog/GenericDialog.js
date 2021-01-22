import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

export const GenericDialog = props => {

    const handleClose = props.onCloseDialog;
    const handleSubmit = props.onConfirmDialog;

    return (
        <Dialog open={props.open}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                {props.children}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()}>Cancel</Button>
                <Button disabled={props.submitDisabled} onClick={() => handleSubmit()}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
};