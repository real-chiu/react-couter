import axios from 'axios';

export default class TodoApis  {
  static getTodoElements() {
    return axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos");
  }

  static addTodoElement(requestBody) {
    return axios.post(`https://5e9ec500fb467500166c4658.mockapi.io/todos`, requestBody);
  }

  static updateTodoElement(id, requestBody) {
    return axios.put(`https://5e9ec500fb467500166c4658.mockapi.io/todos/${id}`, requestBody);
  }

  static deleteTodoElement(id) {
    return axios.delete(`https://5e9ec500fb467500166c4658.mockapi.io/todos/${id}`);
  }
}
