import {fetchData} from "./utils/fetchUtil";

export const getTasks = async reminderId => {
    return fetchData(`reminders/${reminderId}/tasks`, 'GET');
};

export const addTask = async (reminderId, task) => {
    return fetchData(`reminders/${reminderId}/tasks`, 'POST', task);
};

export const updateTask = async (reminderId, task) => {
    return fetchData(`reminders/${reminderId}/tasks/${task._id}`, 'PUT', task);
};

export const deleteTask = async task => {
    return fetchData(`tasks/${task._id}`, 'DELETE');
};