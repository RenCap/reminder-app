import {useState} from "react";

export const useDialog = () => {
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState('');

    const openDialog = action => {
        setAction(action);
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
        setAction('');
    };

    return {open, openDialog, closeDialog, action};
};