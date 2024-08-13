import { ENDPOINT_URL } from "../constants/constants";

export const createTodo = (todo) => {
    return fetch(`${ENDPOINT_URL}/createTodo`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).then((res) => {
        return res.json()
    }).catch(err => {
        console.log(err)
    })
}

export const getALLTodo = () => {
    return fetch(`${ENDPOINT_URL}/getALLTodos`, {
        method: 'GET',
        header: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
    }).then((res) => {
        return res.json()
    }).catch(err => {
        console.log(err)
    })
}


export const DeleteTodo = (id) => {
    return fetch(`${ENDPOINT_URL}/deleteTodoById/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json' // Note the capitalization
        }
    }).then((res) => {
        return res.json();
    }).catch(err => {
        console.log(err);
    });
}


export const UpdateTodo = (id,data) => {
    return fetch(`${ENDPOINT_URL}/updateTodoById/${id}`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json' // Note the capitalization
        },
        body : JSON.stringify(data)
    }).then((res) => {
        return res.json();
    }).catch(err => {
        console.log(err);
    });
}