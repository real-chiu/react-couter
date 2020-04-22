import axios from 'axios';

export default class TodoApis  {
  static getTodoElements() {
    return axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos");
  }

  static addTodoElements(requestBody) {
    return axios.post(`https://5e9ec500fb467500166c4658.mockapi.io/todos`, requestBody);
  }

  static updateTodoElements(id, requestBody) {
    return axios.put(`https://5e9ec500fb467500166c4658.mockapi.io/todos/${id}`, requestBody);
  }

  static deleteTodoElements() {
    return axios.delete(`https://5e9ec500fb467500166c4658.mockapi.io/todos`);
  }
}
