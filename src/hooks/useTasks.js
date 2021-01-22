import {useEffect, useState} from "react";

import * as taskService from "../services/taskService";

export const useTasks = reminderId => {
    const [tasks, setTasks] = useState([]);
    const [activeTask, setActiveTask] = useState({});
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Fetch tasks
        (async () => {
            try {
                const data = await taskService.getTasks(reminderId);
                setTasks(data);
            } catch (e) {
                console.error('An error occurred while retrieving the tasks.');
            }
        })();
    }, [key, reminderId]);

    useEffect(() => {
        setActiveTask({});
    }, [reminderId]);

    return {tasks, activeTask, setActiveTask};
};