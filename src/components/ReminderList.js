import {useState} from "react";
import {Grid} from "@material-ui/core";

import {useReminders} from "../hooks/useReminders";
import {TaskList} from "./TaskList";
import {SelectableList} from "./SelectableList";

export const ReminderList = (props) => {
    const [activeReminder, setActiveReminder] = useState({});
    const {reminders} = useReminders();

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
                {activeReminder._id ? <TaskList reminderId={activeReminder._id}/> : <></>}
            </Grid>
        </Grid>
    );
};