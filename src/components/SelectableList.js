import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";

export const SelectableList = props => {

    const items = props.items;
    const selectedItem = props.selectedItem;
    const idSelector = props.idSelector;
    const labelSelector = props.labelSelector;

    const addItem = props.onAddItem;
    const editItem = props.onEditItem;
    const deleteItem = props.onDeleteItem;

    const selectItem = itemId => {
        const item = items.find(item => idSelector(item) === itemId);
        props.onSelect && props.onSelect(item);
    };

    let addButton = addItem ?
        <IconButton aria-label="add" onClick={() => addItem()}><Icon>add</Icon></IconButton> :
        <></>;
    let editButton = !!idSelector(selectedItem) && editItem ?
        <IconButton aria-label="edit" onClick={() => editItem()}><Icon>edit</Icon></IconButton> :
        <></>;
    let deleteButton = !!idSelector(selectedItem) && deleteItem ?
        <IconButton aria-label="delete" onClick={() => deleteItem()}><Icon>delete</Icon></IconButton> :
        <></>;

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
            <CardActions>
                {addButton}
                {editButton}
                {deleteButton}
            </CardActions>
        </Card>
    );
};