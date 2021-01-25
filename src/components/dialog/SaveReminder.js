import {TextField} from "@material-ui/core";
import {isEmpty, mergeRight, propOr} from "ramda";
import {useState} from "react";

export const SaveReminder = ({disableSubmit, onChange, reminder}) => {
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