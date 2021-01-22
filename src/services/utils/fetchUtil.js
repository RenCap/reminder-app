export const fetchData = async (uri, method, body) => {
    const options = {
        method: method,
        headers: {'Content-Type': 'application/json'}
    };
    if (!!body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(uri, options);

    if (response.ok) {
        return response.json();
    }
    throw Error("An error occurred.");
};