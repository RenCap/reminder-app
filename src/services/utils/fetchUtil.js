export const fetchData = async (endpoint, method, body) => {
    const options = {
        method: method,
        headers: {'Content-Type': 'application/json'}
    };
    if (!!body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`http://localhost:8080/api/${endpoint}`, options);

    if (response.ok) {
        return response.json();
    }
    throw Error("An error occurred.");
};