import {useEffect, useState} from "react";

import * as taskService from "../services/taskService";

export const useTasks = (reminderId) => {
    const [tasks, setTasks] = useState([]);
    const [activeTask, setActiveTask] = useState({});
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Fetch tasks
        (async () => {
            const data = await taskService.getTasks(reminderId);
            setTasks(data);
        })();
    }, [key, reminderId]);

    useEffect(() => {
        setActiveTask({});
    }, [reminderId]);

    return {tasks, activeTask, setActiveTask};
};