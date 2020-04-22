import axios from 'axios';

import React from 'react'

export default class CounterApis {
  static getCounterSize() {
    const api_url = 'https://5e9ed3a0fb467500166c47b3.mockapi.io/counters';
    return axios.get(api_url);
  }
}
