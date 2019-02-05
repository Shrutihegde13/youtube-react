import React from 'react';
import {Video} from '../Video';
import {shallow} from 'enzyme';


test('renders video component correctly',()=> {
   const wrapper = shallow(
       <Video id='HAuXJVI_bUs'/>
    
   );
   expect(wrapper).toMatchSnapshot();

});