import React, { Component } from 'react';
//import HeaderNav from './containers/HeaderNav/HeaderNav';
//import { SideBar } from './containers/Sidebar/SideBar';
import {Home} from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';
//import './containers/Home/Home.scss';



class App extends Component {
  render() {
    return (
      <AppLayout>
      <Home/>
      </AppLayout>
         
    );
  }
}

export default App;
