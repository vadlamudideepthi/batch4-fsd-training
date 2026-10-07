import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Likesdislikes from './components/Likesdislikes';
import image from './download.jpg';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>

      <img
        src={image}
        alt="My Image"
        className="my-image"
      />

      <Counter />
      <Likesdislikes />
    </div>
  );
}

export default App;
