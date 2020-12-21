import {TaskDetails} from "./TaskDetails";

export const TaskList = () => {
    // TODO remove mock
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

    return (
        <>
            <ul>
                {tasks.map(task =>
                    <li key={task._id}> {task.name}</li>
                )}
            </ul>
            <TaskDetails task={tasks[0]}/>
        </>
    );
}