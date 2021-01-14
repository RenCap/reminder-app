import {useState} from 'react';
import {Grid} from "@material-ui/core";

import {TaskDetails} from "./TaskDetails";
import {SelectableList} from "./SelectableList";

export const TaskList = (props) => {
    const [activeTask, setActiveTask] = useState({});

    // TODO replace mock using hook
    // let reminderId = props.reminderId;
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
    ];

    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
                <SelectableList title={'Tasks'}
                                items={tasks}
                                idSelector={task => task._id}
                                labelSelector={task => task.name}
                                onSelect={task => setActiveTask(task)}/>
            </Grid>
            <Grid item xs={6}>
                <TaskDetails task={activeTask}/>
            </Grid>
        </Grid>
    );
};