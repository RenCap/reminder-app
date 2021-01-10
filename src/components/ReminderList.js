import {Card, CardContent, CardHeader, Grid, List, ListItem, ListItemText} from "@material-ui/core";

import {TaskList} from "./TaskList";

export const ReminderList = (props) => {
    // TODO replace mock using hook
    const reminders = [
        {_id: 1, name: 'TODO'},
        {_id: 2, name: 'Doing'},
        {_id: 3, name: 'Done'}
    ];

    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
            <Grid item xs={4}>
                <Card>
                    <CardHeader title={'Reminders'}/>
                    <CardContent>
                        <List component="nav">
                            {reminders.map(reminder =>
                                <ListItem button key={reminder._id}>
                                    <ListItemText primary={reminder.name}/>
                                </ListItem>
                            )}
                        </List>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={8}>
                <TaskList reminderId={reminders[0]._id}/>
            </Grid>
        </Grid>
    );
};