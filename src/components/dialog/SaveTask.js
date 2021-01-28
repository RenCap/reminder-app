import {useState} from "react";
import * as PropTypes from "prop-types";
import {isEmpty, mergeRight, objOf, propOr} from "ramda";
import {Grid, TextField} from "@material-ui/core";

const SaveTask = ({disableSubmit, onChange, task}) => {
    const [error, setError] = useState(false);


    const validate = task => {
        return !!task.name && !isEmpty(task.name);
    };

    const handleChange = field => event => {
        const value = event.target.value;
        const newTask = mergeRight(task, objOf(field, value));
        const invalid = !validate(newTask);
        disableSubmit(invalid);
        setError(invalid);
        onChange(newTask);
    };

    return (
        <form>
            <Grid container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={2}>
                <Grid item>
                    <TextField required error={error} label={'Name'} value={propOr('', 'name', task)}
                               onChange={handleChange('name')}/>
                </Grid>
                <Grid item>
                    <TextField multiline label={'Description'} value={propOr('', 'description', task)}
                               onChange={handleChange('description')}/>
                </Grid>
            </Grid>
        </form>
    );
};

SaveTask.propTypes = {
    disableSubmit: PropTypes.func,
    onChange: PropTypes.func,
    task: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
    })
};

export default SaveTask;