import {fetchData} from "./utils/fetchUtil";

export const getReminders = async () => {
    return fetchData('http://localhost:8080/api/reminders', 'GET');
};

export const addReminder = async reminder => {
    return fetchData('http://localhost:8080/api/reminders', 'POST', reminder);
};

export const updateReminder = async reminder => {
    return fetchData(`http://localhost:8080/api/reminders/${reminder._id}`, 'PUT', reminder);
};

export const deleteReminder = async reminder => {
    return fetchData(`http://localhost:8080/api/reminders/${reminder._id}`, 'DELETE');
};