import React from 'react';
import ProjectCard from './project-card.js';
import cards from './../resources/objects/project-cards-detail.js';


// Component containing the Project page and it's children
export class ProjectPage extends React.Component{
  render(){
    var project_cards = [];
    Object.entries(cards).forEach((item, i) => {
      project_cards.push(<ProjectCard key={i} card={item[1]} />)
    });

    return (
      <section id={'project'}>
        <div><h2 >Projects</h2></div>
        
        <div id={'project-container'} >
          {  project_cards }
        </div>
      </section>
    );
  }
}
