import * as PropTypes from "prop-types";
import {Grid} from "@material-ui/core";
import {clone, propOr} from "ramda";

import {useTasks} from "../hooks/useTasks";
import {useDialog} from "../hooks/useDialog";
import TaskDetails from "./TaskDetails";
import SelectableList from "./SelectableList";
import DeleteItem from "./dialog/DeleteItem";
import SaveTask from "./dialog/SaveTask";
import GenericDialog from "./dialog/GenericDialog";

const TaskList = ({reminderId}) => {
    const {tasks, activeTask, setActiveTask, addTask, updateTask, deleteTask} = useTasks(reminderId);
    const {open, openDialog, closeDialog, action, item, setItem, submitDisabled, disableSubmit} = useDialog();

    const actions = {
        add: {
            title: 'Create a task',
            onSubmit: async () => {
                await addTask(item);
                closeDialog();
            },
            template: <SaveTask task={item} onChange={setItem} disableSubmit={disableSubmit}/>
        },
        update: {
            title: 'Edit the task',
            onSubmit: async () => {
                await updateTask(item);
                closeDialog();
            },
            template: <SaveTask task={item} onChange={setItem} disableSubmit={disableSubmit}/>
        },
        delete: {
            title: 'Delete the task',
            onSubmit: async () => {
                await deleteTask();
                closeDialog();
            },
            template: <DeleteItem type={'task'} name={activeTask.name}/>
        }
    };

    return (
        <>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                    <SelectableList title={'Tasks'}
                                    items={tasks}
                                    idSelector={task => task._id}
                                    labelSelector={task => task.name}
                                    onSelect={task => setActiveTask(task)}
                                    selectedItem={activeTask}
                                    onAddItem={openDialog('add')}
                                    onEditItem={openDialog('update', clone(activeTask))}
                                    onDeleteItem={openDialog('delete')}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TaskDetails task={activeTask}/>
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

TaskList.propTypes = {
    reminderId: PropTypes.string
};

export default TaskList;