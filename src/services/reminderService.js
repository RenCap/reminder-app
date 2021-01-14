export const getReminders = async () => {
    const response = await fetch('http://localhost:8080/api/reminders', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        return await response.json();
    }
    throw Error("Error : Can't load reminders");
};