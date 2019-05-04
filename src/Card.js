import React from 'react'
import './Card.scss'

const Card = ({name, species, homeworld, population, terrain, climate, residents, model, vehicle_class, passengers}) => {
  let whatToRender;
  if(species) {
    whatToRender = 
      <div className='people-card'>
        <p>name: {name}</p>
        <p>homeworld: {homeworld}</p>
        <p>species: {species}</p>
        <p>population: {population}</p>
      </div>
  } else if(model) {
    whatToRender = 
      <div className='vehicle-card'>
        <p>name: {name}</p>
        <p>model: {model}</p>
        <p>Vehicle Class: {vehicle_class}</p>
        <p>Passengers: {passengers}</p>
      </div>
  } else if(climate) {
    whatToRender = 
    <div className='planets-card'>
      <p>name: {name}</p>
      <p>terrain: {terrain}</p>
      <p>population: {population}</p>
      <p>residents: {residents.join(', ')}</p>
      <p>climate: {climate}</p>
    </div>
  }
  return(
    <div className='card'>
      {whatToRender}
      <button className='favorite-btn'>Favorite</button>
    </div>
  )
}

export default Card