import React from 'react';
import { shallow } from 'enzyme';
import InfoContainer from './InfoContainer.js';




describe('InfoContainer', () => {
  let wrapper;
  beforeEach(() =>{
    wrapper = shallow(
      <InfoContainer />
    )
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should set state when function getRandomFilm is called', () => {
    const mockFilms = ['Empire Strikes back', 'Rogue One']
    wrapper.instance(getRandomFilm(mockFilms))
    
  })
});