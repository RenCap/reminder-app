import {useEffect, useState} from "react";

import * as reminderService from '../services/reminderService';

export const useReminders = () => {
    const [reminders, setReminders] = useState([]);
    const [key, setKey] = useState(0);

    useEffect(() => {
        const fetchReminders = async () => {
            const data = await reminderService.getReminders();
            setReminders(data);
        };
        fetchReminders();
    }, [key]);

    return {reminders};
};