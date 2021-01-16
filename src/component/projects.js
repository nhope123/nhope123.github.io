import React from 'react';
import Card from './card.js';
 import convert from './../image/screenshots/converter.png';
import cards from './../redux/actions/card-details.js';




export class ProjectPage extends React.Component{
  render(){
    var test=[];
    Object.entries(cards).forEach((item, i) => {
      test.push(<Card key={i} card={item[1]} />)
    });


    return (
      <section id={'project'}>
        <div> Projects</div>
        <div id={'project-container'} >
          {test}
        </div>
      </section>
    );
  }
}
