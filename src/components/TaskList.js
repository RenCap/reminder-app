import {useState} from 'react';
import {Card, CardContent, CardHeader, Grid, List, ListItem, ListItemText} from "@material-ui/core";

import {TaskDetails} from "./TaskDetails";

export const TaskList = (props) => {
    const [selectedTask, setSelectedTask] = useState({});

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

    const selectTask = (taskId) => {
        setSelectedTask(tasks.find(task => task._id === taskId));
    };

    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
                <Card>
                    <CardHeader title={'Tasks'}/>
                    <CardContent>
                        <List>
                            {tasks.map(task =>
                                <ListItem button selected={task._id === selectedTask._id} key={task._id} onClick={() => selectTask(task._id)}>
                                    <ListItemText primary={task.name}/>
                                </ListItem>
                            )}
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <TaskDetails task={selectedTask}/>
            </Grid>
        </Grid>
    );
};