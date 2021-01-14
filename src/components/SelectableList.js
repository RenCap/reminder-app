import {useState} from "react";
import {Card, CardContent, CardHeader, List, ListItem, ListItemText} from "@material-ui/core";

export const SelectableList = (props) => {
    const [selectedItem, setSelectedItem] = useState({});

    const items = props.items;
    const idSelector = props.idSelector;
    const labelSelector = props.labelSelector;

    const selectItem = itemId => {
        const item = items.find(item => idSelector(item) === itemId);
        setSelectedItem(item);
        // Notify parent
        props.onSelect && props.onSelect(item);
    };

    // const selectItem = itemId => setSelectedItem(props.items.find(item => idSelector(item) === itemId));

    return (
        <Card>
            <CardHeader title={props.title}/>
            <CardContent>
                <List component="nav">
                    {items.map(item =>
                        <ListItem button selected={idSelector(selectedItem) === idSelector(item)} key={idSelector(item)}
                                  onClick={() => selectItem(idSelector(item))}>
                            <ListItemText primary={labelSelector(item)}/>
                        </ListItem>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};