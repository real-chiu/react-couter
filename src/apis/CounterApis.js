import axios from 'axios';

export default class CounterApis {
  static getCounterSize() {
    const api_url = 'https://5e9ed3a0fb467500166c47b3.mockapi.io/counters';
    return axios.get(api_url);
  }

  static setCounterSize(size) {
    const api_url = 'https://5e9ed3a0fb467500166c47b3.mockapi.io/counters/1';
    const req_body = {
        size
      }
    return axios.put(api_url, req_body);
  }
}
