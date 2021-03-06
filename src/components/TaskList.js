import {useState} from 'react';
import {Grid} from "@material-ui/core";

import {useTasks} from "../hooks/useTasks";
import {TaskDetails} from "./TaskDetails";
import {SelectableList} from "./SelectableList";

export const TaskList = (props) => {
    const {tasks, activeTask, setActiveTask} = useTasks(props.reminderId);

    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
                <SelectableList title={'Tasks'}
                                items={tasks}
                                idSelector={task => task._id}
                                labelSelector={task => task.name}
                                onSelect={task => setActiveTask(task)}
                                selectedItem={activeTask}/>
            </Grid>
            <Grid item xs={6}>
                <TaskDetails task={activeTask}/>
            </Grid>
        </Grid>
    );
};