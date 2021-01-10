export const TaskDetails = (props) => {
    const task = props.task;
    return (
        <>
            <h1>{task.name}</h1>
            <p>{task.description}</p>
        </>
    );
}