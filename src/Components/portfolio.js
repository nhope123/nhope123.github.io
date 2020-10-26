import React from 'react';
import {Menu,Welcome,Footer} from './nav';

export class Portfolio extends React.Component{
  render(){
    return (
      <div id='main-container' >
        <Menu />
        <Welcome />
        <Footer />
      </div>
    );
  }
}
