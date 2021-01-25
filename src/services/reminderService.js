import {fetchData} from "./utils/fetchUtil";

export const getReminders = async () => {
    return fetchData('reminders', 'GET');
};

export const addReminder = async reminder => {
    return fetchData('reminders', 'POST', reminder);
};

export const updateReminder = async reminder => {
    return fetchData(`reminders/${reminder._id}`, 'PUT', reminder);
};

export const deleteReminder = async reminder => {
    return fetchData(`reminders/${reminder._id}`, 'DELETE');
};