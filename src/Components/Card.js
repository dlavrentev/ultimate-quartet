import React from 'react';
import './../Css/Card.css';
import Animal from '../Data/Animal.js';
import PropTypes from 'prop-types';

const uncovered = false;

export default function Card({animal, uncovered}) {

  Card.propTypes = {
    uncovered: PropTypes.bool.isRequired,
    animal: PropTypes.object.isRequired,
  };

  const elephant = new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40);
  const front = (
    <div className='card'>
    <h1>{animal.name ? animal.name : 'Unbekannt'}</h1>
    {animal.image && (
      <img alt="Elefant" height="200" width="200" src="https://picsum.photos/200/300" />
    )}
    <table>
        <tbody>
          {Object.keys(Animal.properties).map(property => {
            const animalProperty = Animal.properties[property];
            return (
              <tr key={property}>
                <td>{animalProperty.label}</td>
                <td>{elephant[property]}&nbsp;{animalProperty.unit}</td> {/* ???????  */}
              </tr>
            );
          })}
            {/* <tr><td>Größe</td><td>{elephant.size} m</td></tr>
            <tr><td>Gewicht</td><td>{elephant.weight} kg</td></tr>
            <tr><td>Alter</td><td>{elephant.age} Jahre</td></tr>
            <tr><td>Nachkommen</td><td>{elephant.offspring}</td></tr>
            <tr><td>Geschwindigkeit</td><td>{elephant.speed} km/h</td></tr> */}
        </tbody>
    </table>
    </div>
  );

  const back = <div className='card back' />
  
  if (uncovered) {
    return front;
  } else {
    return back;
  }
}
