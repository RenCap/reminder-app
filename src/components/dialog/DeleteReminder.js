import {DialogContentText} from "@material-ui/core";

export const DeleteReminder = props => {
    return <DialogContentText>Are you sure you want to delete the reminder "{props.reminderName}" ?</DialogContentText>;
};