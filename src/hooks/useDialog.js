import {useState} from "react";
import {equals} from "ramda";

export const useDialog = () => {
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState('');
    const [item, setItem] = useState({});
    const [submitDisabled, disableSubmit] = useState(true);

    const openDialog = (action, value) => () => {
        setAction(action);
        setItem(value);
        disableSubmit(!equals('delete', action));
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
        setAction('');
        setItem({});
    };

    return {open, openDialog, closeDialog, action, item, setItem, submitDisabled, disableSubmit};
};