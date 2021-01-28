import {useState} from "react";
import * as PropTypes from "prop-types";
import {TextField} from "@material-ui/core";
import {isEmpty, mergeRight, propOr} from "ramda";

const SaveReminder = ({disableSubmit, onChange, reminder}) => {
    const [error, setError] = useState(false);

    const handleChangeName = event => {
        const value = event.target.value;
        const invalid = isEmpty(value);
        disableSubmit(invalid);
        setError(invalid);

        onChange(mergeRight(reminder, {name: value}));
    };

    return (
        <form>
            <TextField required variant={"outlined"} error={error} label={'Name'} value={propOr('', 'name', reminder)}
                       onChange={handleChangeName}/>
        </form>
    );
};

SaveReminder.propTypes = {
    disableSubmit: PropTypes.func,
    onChange: PropTypes.func,
    reminder: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string
    })
};

export default SaveReminder;