import {TaskList} from "./TaskList";

export const ReminderList = () => {
    // TODO remove mock
    const reminders = [
        {_id: 1, name: 'TODO'},
        {_id: 2, name: 'Doing'},
        {_id: 3, name: 'Done'}
    ]

    return (
        <>
            <ul>
                {reminders.map(reminder =>
                    <li key={reminder._id}>{reminder.name}</li>
                )}
            </ul>
            <TaskList/>
        </>
    );
}