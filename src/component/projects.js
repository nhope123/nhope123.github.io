import React from 'react';
import ProjectCard from './project-card.js';
// import convert from './../image/screenshots/converter.png';
import cards from './../resources/objects/project-cards-detail.js';




export class ProjectPage extends React.Component{
  render(){
    var project_cards = [];
    Object.entries(cards).forEach((item, i) => {
      project_cards.push(<ProjectCard key={i} card={item[1]} />)
    });


    return (
      <section id={'project'}>
        <div> Projects</div>
        <div id={'project-container'} >
          {  project_cards }
        </div>
      </section>
    );
  }
}
