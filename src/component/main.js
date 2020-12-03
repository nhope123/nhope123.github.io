import React from 'react';
import {Navigation} from './navigation';
import {Intro} from './home';

export class Portfolio extends React.Component{
  render(){
    return(
      <div id={'main'} >
        <Navigation />
        <Intro />
      </div>
    )
  }
}
