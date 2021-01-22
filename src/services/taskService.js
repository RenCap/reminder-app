import {fetchData} from "./utils/fetchUtil";

export const getTasks = async reminderId => {
    return fetchData(`http://localhost:8080/api/reminders/${reminderId}/tasks`, 'GET');
};