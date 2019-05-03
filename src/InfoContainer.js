import React, { Component } from 'react';
import CrawlContainer from './CrawlContainer.js'
import Menu from './Menu.js'
import CardContainer from './CardContainer.js'
import './InfoContainer.scss';
import { getCurrentCategoryData, getHomeworld, getSpecies, getPlanets } from './ApiCalls/ApiFetches.js'

class InfoContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentFilm: {},
      categoryData: [],
      containerClass: 'info-container'
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/films';
    fetch(url)
      .then(response => response.json())
      .then(movies => this.getRandomFilm(movies.results))
      .catch(error => console.log(error))
  }

  getRandomFilm = (films) => {
    console.log('hello')
    const film = films[Math.floor(Math.random()*films.length)]
    setTimeout(() => this.setState({currentFilm: film}), 1000)
  }

  checkCategory = (category) => {
    if(category === 'people') {
      this.fetchPeople(category)
    } else if(category === 'planets') {
      this.fetchPlanets(category)
    } else {
      this.fetchVehicles(category)
    }
  }
  
  fetchPeople = (people) => {
    getCurrentCategoryData(people)
    .then(result => getHomeworld(result.results))
    .then(newResult => getSpecies(newResult))
    .then(ppl => this.setState({categoryData: ppl,  containerClass: 'info-container-bg'}))
  }

  fetchPlanets = (planet) => {
    getCurrentCategoryData(planet)
    .then(result => getPlanets(result.results))
    // .then(planets => console.log(planets))
    .then(plnt => this.setState({categoryData: plnt, containerClass: 'info-container-bg'}))
  }

  fetchVehicles = (vehicle) => {
    getCurrentCategoryData(vehicle)
    .then(result => this.setState({categoryData: result.results, containerClass: 'info-container-bg'}))
  }

  render() {
    let whatToRender;
    if(this.state.categoryData.length) {
      whatToRender = <CardContainer categoryData={this.state.categoryData}/>
    } else {
      whatToRender = <CrawlContainer {...this.state.currentFilm}/>
    }
    return(
      <div className={this.state.containerClass}>
        <div className='display-container'>
          <Menu checkCategory={this.checkCategory}/>
          {whatToRender}
        </div>
      </div>
    )
  }
}

export default InfoContainer;