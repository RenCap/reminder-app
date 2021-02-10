import {Grid} from "@material-ui/core";
import {clone, prop, propOr} from "ramda";

import {useReminders} from "../hooks/useReminders";
import {useDialog} from "../hooks/useDialog";
import TaskList from "./TaskList";
import SelectableList from "./SelectableList";
import GenericDialog from "./dialog/GenericDialog";
import DeleteItem from "./dialog/DeleteItem";
import SaveReminder from "./dialog/SaveReminder";

const ReminderList = () => {
    const {reminders, activeReminder, setActiveReminder, addReminder, updateReminder, deleteReminder} = useReminders();
    const {open, openDialog, closeDialog, action, item, setItem, submitDisabled, disableSubmit} = useDialog();

    const actions = {
        add: {
            title: 'Create a reminder',
            onSubmit: async () => {
                await addReminder(item);
                closeDialog();
            },
            template: <SaveReminder reminder={item} onChange={setItem} disableSubmit={disableSubmit}/>
        },
        update: {
            title: 'Edit the reminder',
            onSubmit: async () => {
                await updateReminder(item);
                closeDialog();
            },
            template: <SaveReminder reminder={item} onChange={setItem} disableSubmit={disableSubmit}/>
        },
        delete: {
            title: 'Delete the reminder',
            onSubmit: async () => {
                await deleteReminder();
                closeDialog();
            },
            template: <DeleteItem type={'reminder'} name={activeReminder.name}/>
        }
    };

    return (
        <>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                <Grid item xs={4}>
                    <SelectableList title={'Reminders'}
                                    items={reminders}
                                    idSelector={prop('_id')}
                                    labelSelector={prop('name')}
                                    selectedItem={activeReminder}
                                    onSelect={setActiveReminder}
                                    onAddItem={openDialog('add')}
                                    onEditItem={openDialog('update', clone(activeReminder))}
                                    onDeleteItem={openDialog('delete')}
                    />
                </Grid>
                <Grid item xs={8}>
                    {activeReminder._id ? <TaskList reminderId={activeReminder._id}/> : <></>}
                </Grid>
            </Grid>
            <GenericDialog open={open}
                           title={propOr('', 'title', actions[action])}
                           onCloseDialog={() => closeDialog()}
                           onConfirmDialog={propOr(() => {}, 'onSubmit', actions[action])}
                           submitDisabled={submitDisabled}>
                {propOr(<></>, 'template', actions[action])}
            </GenericDialog>
        </>
    );
};

export default ReminderList;