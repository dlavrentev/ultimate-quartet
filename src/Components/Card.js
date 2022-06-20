import React from 'react'
import '../Card.css'
import Animal from '../Data/Animal.js'

export default function Card() {

  const elephant = new Animal('Elefant', 'placeholder.png', 3.3, 6000, 70, 1, 40);
  
  return (
    <div className='card'>
    <h1>{elephant.name}</h1>
    <img alt="Elefant" height="200" width="200" src="https://picsum.photos/200/300" />
    <table>
        <tbody>
          {Object.keys(Animal.properties).map(property => {
            const animalProperty = Animal.properties[property];
            return (
              <tr key={property}>
                <td>{animalProperty.label}</td>
                <td>
                  {elephant[property]}&nbsp;
                  {animalProperty.unit}
                </td>
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
}
