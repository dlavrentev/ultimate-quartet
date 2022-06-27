import React, { Component } from 'react'
import './../Css/Game.css';
import Card from './Card.js';
import Animal from '../Data/Animal.js';

export default class Game extends Component {
  render() {
    const playersTurn = true;
    const player = [
        new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40)
    ];
    const computer = [
        new Animal('Nashorn', 'placeholder.png', 1.9, 2300, 50, 1, 50)
    ]
    return (
      <div>
        <div className='info'>
            {playersTurn ? 'Du bist' : 'Der Computer ist'} an der Reihe 
        </div>
        <div className='cards'>
            <Card animal={player[0]} uncovered={playersTurn} />
            <Card animal={computer[0]} uncovered={!playersTurn} />
        </div>
      </div>
    )
  }
}
