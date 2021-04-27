import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomFunction from './CustomFunction';
import CustomClass from './CustomClass';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <p>Hello World</p>
      <CustomFunction radius={111111111} color="Yellow"/>
      <CustomClass name="Vasea" telephone={123456789} />
    </div>
  );
}

export default App;