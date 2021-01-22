import {TextField} from "@material-ui/core";
import {isEmpty, mergeRight, propOr} from "ramda";
import {useState} from "react";

export const AddUpdateReminder = props => {
    const [error, setError] = useState(false);

    const reminder = props.reminder || {};
    const name = propOr('', 'name')(reminder);

    const handleChangeName = event => {
        const value = event.target.value;
        const invalid = isEmpty(value);
        props.disableSubmit(invalid);
        setError(invalid);

        props.onChange(mergeRight(reminder, {name: value}));
    };

    return (
        <form>
            <TextField required variant={"outlined"} error={error} label={'Name'} value={name}
                       onChange={handleChangeName}/>
        </form>
    );
};