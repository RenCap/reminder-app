import * as PropTypes from "prop-types";
import {Card, CardContent, CardHeader} from "@material-ui/core";

import "./TaskDetails.css";

const TaskDetails = ({task}) => {
    const taskCard =
        <Card>
            <CardHeader title={task.name}/>
            <CardContent className={'multiline'}>{task.description}</CardContent>
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