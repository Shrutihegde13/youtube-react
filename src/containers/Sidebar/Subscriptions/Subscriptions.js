import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';


export class Subscriptions extends React.Component {

   render(){
       return (
           <React.Fragment>
               <SideBarHeader title="Subscriptions"/>
               <Subscription label='MusicChannel' broadcasting/>
               <Subscription label='Coursera' amountNewVideos={10}/>
               <Subscription label='TEDx Talks' amountNewVideos={20}/>
               <Subscription label='Udacity' amountNewVideos={30}/>
               <Divider/>
           </React.Fragment>
       );
   }




}