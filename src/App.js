import React from 'react';
import './Style.css';
import Card from './Components/Card';
import Animal from './Data/Animal';
import Game from './Components/Game';

function App() {

  const animal = new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40);

  return (
    <div className="App">
      <h1>Ultimate Quartet</h1>
      <Game title ="Supertrumpf" />
    </div>
  );
}

export default App;
