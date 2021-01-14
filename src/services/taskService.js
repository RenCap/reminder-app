export const getTasks = async (reminderId) => {
    const response = await fetch(`http://localhost:8080/api/reminders/${reminderId}/tasks`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        return await response.json();
    }
    throw Error("Error : Can't load tasks");
};