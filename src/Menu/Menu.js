import React, { Component } from 'react';
import './Menu.scss'
import PeopleIcon from '../images/people.png'
import PlanetsIcon from '../images/planet.png'
import VehiclesIcon from '../images/ship.png'
import logo from '../images/SW-logo.png'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: ''
    }
  }

  handleClick = (e) => {
    this.props.checkCategory(e.target.name)
  }

  render() {
    return(
      <div className='menu'>
        <img src={logo} />
        <nav>
          <div className='btn' role='button' name='people' onClick={this.handleClick}>
            <img src={PeopleIcon} alt='Storm trooper illustration' name='people'/>
            People
          </div>
          <div className='btn' role='button' name='planets' onClick={this.handleClick}>
            <img src={PlanetsIcon} alt='Planet illustration' name='planets'/>
            Planets
          </div>
          <div className='btn' role='button' name='vehicles' onClick={this.handleClick}>
            <img src={VehiclesIcon} alt='Millennium Falcon illustration' name='vehicles'/>
            Vehicles
          </div>
        </nav>
      </div>
    )
  }
}

export default Menu;