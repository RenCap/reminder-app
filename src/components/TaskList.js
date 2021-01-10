import {useState} from 'react';

import {TaskDetails} from "./TaskDetails";

export const TaskList = (props) => {
    let [selectedTask, setSelectedTask] = useState({name: '', description: ''});

    // TODO replace mock using hook
    const tasks = [
        {
            _id: 1,
            name: 'Faire ci',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            reminder: {
                _id: 1
            }
        },
        {
            _id: 2,
            name: 'Faire ça',
            reminder: {
                _id: 1
            }
        }
    ]

    const selectTask = (taskId) => {
        setSelectedTask(tasks.find(task => task._id === taskId))
    }

    return (
        <>
            <ul>
                {tasks.map(task =>
                    <li key={task._id}>
                        <button onClick={() => selectTask(task._id)}>
                            {task.name}
                        </button>
                    </li>
                )}
            </ul>
            <TaskDetails task={selectedTask}/>
        </>
    );
}