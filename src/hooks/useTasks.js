import {useEffect, useState} from "react";

import * as taskService from "../services/taskService";

export const useTasks = (reminderId) => {
    const [tasks, setTasks] = useState([]);
    const [key, setKey] = useState(0);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await taskService.getTasks(reminderId);
            setTasks(data);
        };
        fetchTasks();
    }, [key, reminderId]);

    return {tasks};
}