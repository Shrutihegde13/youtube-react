import React, { Component } from 'react';
//import HeaderNav from './containers/HeaderNav/HeaderNav';
//import { SideBar } from './containers/Sidebar/SideBar';
import {Home} from './containers/Home/Home';
import {Watch} from './containers/Watch/Watch';
import {AppLayout} from './components/AppLayout/AppLayout';
//import './containers/Home/Home.scss';
import {Route,Switch} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch}/>
          <Route path="/" component={Home}/>

      </Switch>
      </AppLayout>
         
    );
  }
}

export default App;
