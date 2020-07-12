import axios from 'axios';
export const getData = (tasks) => {
    return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
}