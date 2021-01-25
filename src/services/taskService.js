import {fetchData} from "./utils/fetchUtil";

export const getTasks = async reminderId => {
    return fetchData(`reminders/${reminderId}/tasks`, 'GET');
};