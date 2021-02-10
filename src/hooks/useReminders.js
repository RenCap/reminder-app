import {useEffect, useState} from "react";
import {inc} from "ramda";

import * as reminderService from '../services/reminderService';
import {useDispatch} from "react-redux";
import {showErrorSnackbar, showSuccessSnackbar} from "../redux/snackbarActions";

export const useReminders = () => {
    const [activeReminder, setActiveReminder] = useState({});
    const [reminders, setReminders] = useState([]);
    const [key, setKey] = useState(0);

    // Redux dispatch for snackbar
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch reminders
        (async () => {
            try {
                const data = await reminderService.getReminders();
                setReminders(data);
            } catch (e) {
                dispatch(showErrorSnackbar('An error occurred while retrieving the reminders.'));
            }
        })();
    }, [key, dispatch]);

    const addReminder = async reminder => {
        try {
            const result = await reminderService.addReminder(reminder);
            setActiveReminder(result);
            dispatch(showSuccessSnackbar('Reminder added successfully'));
        } catch (e) {
            dispatch(showErrorSnackbar('An error occurred while adding the reminder.'));
        }
        setKey(inc(key));
    };

    const updateReminder = async reminder => {
        try {
            const result = await reminderService.updateReminder(reminder);
            setActiveReminder(result);
            dispatch(showSuccessSnackbar('Reminder updated successfully.'));
        } catch (e) {
            dispatch(showErrorSnackbar('An error occurred while updating the reminder.'));
        }
        setKey(inc(key));
    };

    const deleteReminder = async () => {
        try {
            await reminderService.deleteReminder(activeReminder);
            setActiveReminder({});
            dispatch(showSuccessSnackbar('Reminder removed successfully.'));
        } catch (e) {
            dispatch(showErrorSnackbar('An error occurred while deleting the reminder.'));
        }
        setKey(inc(key));
    };

    return {reminders, activeReminder, setActiveReminder, addReminder, updateReminder, deleteReminder};
};