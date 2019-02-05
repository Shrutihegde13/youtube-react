import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';

describe('App',()=> {
  test('renders',()=> {
    const wrapper = shallow(
      <App/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});