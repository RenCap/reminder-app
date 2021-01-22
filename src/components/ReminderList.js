import {Grid} from "@material-ui/core";
import {defaultTo} from "ramda";

import {useReminders} from "../hooks/useReminders";
import {TaskList} from "./TaskList";
import {SelectableList} from "./SelectableList";
import {GenericDialog} from "./dialog/GenericDialog";
import {DeleteReminder} from "./dialog/DeleteReminder";
import {AddUpdateReminder} from "./dialog/AddUpdateReminder";
import {useDialog} from "../hooks/useDialog";

export const ReminderList = props => {
    const {reminders, activeReminder, setActiveReminder, addReminder, updateReminder, deleteReminder} = useReminders();
    const {open, openDialog, closeDialog, action} = useDialog();

    const actions = {
        'add': {
            title: 'Create a reminder',
            onSubmit: async () => {
                console.log('ADD');
            },
            template: <AddUpdateReminder/>
        },
        'update': {
            title: 'Edit the reminder',
            onSubmit: async () => {
                console.log('EDIT');
            },
            template: <AddUpdateReminder reminder={activeReminder}/>
        },
        'delete': {
            title: 'Delete the reminder',
            onSubmit: async () => {
                await deleteReminder();
                closeDialog();
            },
            template: <DeleteReminder reminderName={activeReminder.name}/>
        }
    };

    const getActionOrDefault = () => defaultTo({
        title: '',
        onSubmit: () => {
        },
        template: <></>
    })(actions[action]);

    return (
        <>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                    <SelectableList title={'Reminders'}
                                    items={reminders}
                                    idSelector={reminder => reminder._id}
                                    labelSelector={reminder => reminder.name}
                                    selectedItem={activeReminder}
                                    onSelect={reminder => setActiveReminder(reminder)}
                                    onAddItem={() => openDialog('add')}
                                    onEditItem={() => openDialog('update')}
                                    onDeleteItem={() => openDialog('delete')}
                    />
                </Grid>
                <Grid item xs={8}>
                    {activeReminder._id ? <TaskList reminderId={activeReminder._id}/> : <></>}
                </Grid>
            </Grid>
            <GenericDialog open={open}
                           title={getActionOrDefault().title}
                           onCloseDialog={() => closeDialog()}
                           onConfirmDialog={getActionOrDefault().onSubmit}>
                {getActionOrDefault().template}
            </GenericDialog>
        </>
    );
};