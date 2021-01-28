import * as PropTypes from "prop-types";
import {DialogContentText} from "@material-ui/core";

const DeleteItem = ({type, name}) => {
    return <DialogContentText>Are you sure you want to delete the {type} "{name}" ?</DialogContentText>;
};

DeleteItem.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string
};

export default DeleteItem;