import * as PropTypes from "prop-types";
import {DialogContentText} from "@material-ui/core";

const DeleteReminder = ({reminderName}) => {
    return <DialogContentText>Are you sure you want to delete the reminder "{reminderName}" ?</DialogContentText>;
};

DeleteReminder.propTypes = {
    reminderName: PropTypes.string
};

export default DeleteReminder;