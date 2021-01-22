import {useEffect, useState} from "react";
import {inc} from "ramda";

import * as reminderService from '../services/reminderService';

export const useReminders = () => {
    const [activeReminder, setActiveReminder] = useState({});
    const [reminders, setReminders] = useState([]);
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Fetch reminders
        (async () => {
            try {
                const data = await reminderService.getReminders();
                setReminders(data);
            } catch (e) {
                console.error('An error occurred while retrieving the reminders.');
            }
        })();
    }, [key]);

    const addReminder = async reminder => {
        try {
            const result = await reminderService.addReminder(reminder);
            setActiveReminder(result);
        } catch (e) {
            console.error('An error occurred while adding the reminders.');
        }
        setKey(inc(key));
    };

    const updateReminder = async reminder => {
        try {
            const result = await reminderService.updateReminder(reminder);
            setActiveReminder(result);
        } catch (e) {
            console.error('An error occurred while updating the reminders.');
        }
        setKey(inc(key));
    };

    const deleteReminder = async () => {
        try {
            await reminderService.deleteReminder(activeReminder);
            setActiveReminder({});
        } catch (e) {
            console.error('An error occurred while deleting the reminders.');
        }
        setKey(inc(key));
    };

    return {reminders, activeReminder, setActiveReminder, addReminder, updateReminder, deleteReminder};
};