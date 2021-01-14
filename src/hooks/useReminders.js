import {useEffect, useState} from "react";

import * as reminderService from '../services/reminderService';

export const useReminders = () => {
    const [reminders, setReminders] = useState([]);
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Fetch reminders
        (async () => {
            const data = await reminderService.getReminders();
            setReminders(data);
        })();
    }, [key]);

    return {reminders};
};