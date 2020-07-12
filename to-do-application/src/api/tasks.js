import axios from 'axios';
export const getData = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
}

export const addTask = (title, completed) => {
    return axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
    })
}

export const deleteTask = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
}