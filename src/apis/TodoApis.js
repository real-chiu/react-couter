import axios from 'axios';

export default class TodoApis  {
  static getTodoElemets() {
    return axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos");
  }

  static addTodoElemets(requestBody) {
    return axios.put(`https://5e9ec500fb467500166c4658.mockapi.io/todos/`, requestBody);
  }

  static updateTodoElemets(id, requestBody) {
    return axios.put(`https://5e9ec500fb467500166c4658.mockapi.io/todos/${id}`, requestBody);
  }

  static addTodoElemets() {
    return axios.delete(`https://5e9ec500fb467500166c4658.mockapi.io/todos/`);
  }
}
