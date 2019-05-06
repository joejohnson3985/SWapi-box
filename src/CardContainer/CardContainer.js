import React, { Component } from 'react';
import './CardContainer.scss'
import Card from '../Card/Card.js'

class CardContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  displayCards = (dataCards) => {
    return dataCards.map(cardInfo => 
      <Card 
        name={cardInfo.name} 
        species={cardInfo.species} 
        homeworld={cardInfo.homeworld} 
        population={cardInfo.population} 
        terrain={cardInfo.terrain}
        climate={cardInfo.climate}
        residents={cardInfo.residents}
        model={cardInfo.model}
        class={cardInfo.vehicle_class}
        passengers={cardInfo.passengers}
        key={cardInfo.created}
      />
    )
  }

  render(props) {
    const categoryData = this.props.categoryData
    return(
      <div className='card-container'>
        {this.displayCards(categoryData)}
      </div>
    )    
  }
}

export default CardContainer;