const URL = "http://localhost:8000";

export const fetchTodos = () => {
    return fetch(`${URL}/todo`).then(response => response.json());
}

export const fetchState = () => {
    return fetch(`${URL}/state`).then(response => response.json());
}

export const putTodo = (id, data) => {
    console.log(id, data);
    return fetch(`${URL}/todo/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(response => response.json());
}