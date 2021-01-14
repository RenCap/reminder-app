import {useState} from "react";
import {Grid} from "@material-ui/core";

import {TaskList} from "./TaskList";
import {SelectableList} from "./SelectableList";

export const ReminderList = (props) => {
    const [activeReminder, setActiveReminder] = useState({});

    // TODO replace mock using hook
    const reminders = [
        {_id: 1, name: 'TODO'},
        {_id: 2, name: 'Doing'},
        {_id: 3, name: 'Done'}
    ];

    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
            <Grid item xs={4}>
                <SelectableList title={'Reminders'}
                                items={reminders}
                                idSelector={reminder => reminder._id}
                                labelSelector={reminder => reminder.name}
                                onSelect={reminder => setActiveReminder(reminder)}/>
            </Grid>
            <Grid item xs={8}>
                <TaskList reminderId={reminders[0]._id}/>
            </Grid>
        </Grid>
    );
};