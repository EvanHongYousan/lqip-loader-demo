import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={require('./images/1.jpg')}></img>
      <img src={require('./images/2.jpg')}></img>
      <img src={require('./images/3.jpg')}></img>
      <img src={require('./images/4.jpg')}></img>
    </div>
  );
}

export default App;
