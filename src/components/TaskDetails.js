import {Card, CardContent, CardHeader} from "@material-ui/core";

export const TaskDetails = (props) => {
    const task = props.task;

    const taskCard =
        <Card>
            <CardHeader title={task.name}/>
            <CardContent>{task.description}</CardContent>
        </Card>;

    return <>{task._id && taskCard}</>;
};