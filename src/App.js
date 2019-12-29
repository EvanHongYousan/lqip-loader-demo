import React from 'react';
import './App.css';
import LqImg from './LqImg'

function App() {
  return (
    <div className="App">
      {/* <img src={require('./images/1.jpg').preSrc} alt="img"></img>
      <img src={require('./images/2.jpg').preSrc} srcSet={require('./images/2.jpg').src} alt="img"></img>
      <img src={require('./images/3.jpg').preSrc} alt="img"></img>
      <img src={require('./images/4.jpg').preSrc} alt="img"></img> */}
      <LqImg img={require('./images/1.jpg')} />
      <LqImg img={require('./images/2.jpg')} />
      <LqImg img={require('./images/3.jpg')} />
      <LqImg img={require('./images/4.jpg')} />
    </div>
  );
}

export default App;
