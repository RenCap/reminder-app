export const TaskDetails = (prop) => {
    const task = prop.task;
    return (
        <>
            <h1>{task.name}</h1>
            <p>{task.description}</p>
        </>
    );
}