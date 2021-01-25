import {DialogContentText} from "@material-ui/core";

export const DeleteReminder = ({reminderName}) => {
    return <DialogContentText>Are you sure you want to delete the reminder "{reminderName}" ?</DialogContentText>;
};