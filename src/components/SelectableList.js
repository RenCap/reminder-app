import {useState} from "react";
import {Card, CardContent, CardHeader, List, ListItem, ListItemText} from "@material-ui/core";

export const SelectableList = (props) => {

    const items = props.items;
    const selectedItem = props.selectedItem;
    const idSelector = props.idSelector;
    const labelSelector = props.labelSelector;

    const selectItem = itemId => {
        const item = items.find(item => idSelector(item) === itemId);
        props.onSelect && props.onSelect(item);
    };

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