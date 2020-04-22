import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import CounterGroup from './component/CounterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup size={10}/>
      </header>
    </div>
  );
}

export default App;
