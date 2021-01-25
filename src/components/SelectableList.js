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

export const SelectableList = ({
                                   idSelector,
                                   items,
                                   labelSelector,
                                   onAddItem,
                                   onDeleteItem,
                                   onEditItem,
                                   onSelect,
                                   selectedItem,
                                   title
                               }) => {

    const selectItem = item => () => {
        onSelect(item);
    };

    let addButton = onAddItem ?
        <IconButton aria-label="add" onClick={onAddItem}><Icon>add</Icon></IconButton> :
        <></>;
    let editButton = !!idSelector(selectedItem) && onEditItem ?
        <IconButton aria-label="edit" onClick={onEditItem}><Icon>edit</Icon></IconButton> :
        <></>;
    let deleteButton = !!idSelector(selectedItem) && onDeleteItem ?
        <IconButton aria-label="delete" onClick={onDeleteItem}><Icon>delete</Icon></IconButton> :
        <></>;

    return (
        <Card>
            <CardHeader title={title}/>
            <CardContent>
                <List component="nav">
                    {items.map(item =>
                        <ListItem button selected={idSelector(selectedItem) === idSelector(item)} key={idSelector(item)}
                                  onClick={selectItem(item)}>
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