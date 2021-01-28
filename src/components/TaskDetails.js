import * as PropTypes from "prop-types";
import {Card, CardContent, CardHeader} from "@material-ui/core";

const TaskDetails = ({task}) => {
    const taskCard =
        <Card>
            <CardHeader title={task.name}/>
            <CardContent>{task.description}</CardContent>
        </Card>;

    return <>{task._id && taskCard}</>;
};

TaskDetails.propTypes = {
    task: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })
};

export default TaskDetails;