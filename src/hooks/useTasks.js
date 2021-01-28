import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {inc} from "ramda";

import {showErrorSnackbar, showSuccessSnackbar} from "../redux/snackbarActions";
import * as taskService from "../services/taskService";

export const useTasks = reminderId => {
    const [tasks, setTasks] = useState([]);
    const [activeTask, setActiveTask] = useState({});
    const [key, setKey] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch tasks
        (async () => {
            try {
                const data = await taskService.getTasks(reminderId);
                setTasks(data);
            } catch (e) {
                dispatch(showErrorSnackbar('An error occurred while retrieving the tasks.'));
            }
        })();
    }, [key, reminderId, dispatch]);

    useEffect(() => {
        setActiveTask({});
    }, [reminderId]);

    const addTask = async task => {
        try {
            const result = await taskService.addTask(reminderId, task);
            setActiveTask(result);
            dispatch(showSuccessSnackbar('Task added successfully'));
        } catch (e) {
            dispatch(showErrorSnackbar('An error occurred while adding the task.'));
        }
        setKey(inc(key));
    };

    const updateTask = async task => {
        try {
            const result = await taskService.updateTask(reminderId, task);
            setActiveTask(result);
            dispatch(showSuccessSnackbar('Task updated successfully.'));
        } catch (e) {
            dispatch(showErrorSnackbar('An error occurred while updating the task.'));
        }
        setKey(inc(key));
    };

    const deleteTask = async () => {
        try {
            await taskService.deleteTask(activeTask);
            setActiveTask({});
            dispatch(showSuccessSnackbar('Task removed successfully.'));
        } catch (e) {
            dispatch(showErrorSnackbar('An error occurred while deleting the task.'));
        }
        setKey(inc(key));
    };

    return {tasks, activeTask, setActiveTask, addTask, updateTask, deleteTask};
};