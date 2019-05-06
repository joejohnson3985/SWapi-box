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
});