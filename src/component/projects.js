import React from 'react';
import ProjectCard from './project-card.js';
import cards from './../resources/objects/project-cards-detail.js';
import {frameworkIconData}  from './../resources/objects/about-cards-detail.js';

// Component containing the selection choice for project display
const ProjectSelection = () =>{
  // Create and layout projects buttons
  var project_buttons = [];
  const pButtons = ["React","Redux","Sass"];
  project_buttons.push(<div key={'all'} ><span>{'All'}</span></div>);

  frameworkIconData.forEach((item, i) => {
    if (pButtons.includes(item.name)) {
      project_buttons.push(
        <div key={i} >
        <img src={item.src} alt={item.alt} />
        <span>{item.name}</span>
        </div>
      );
    }
  });
  return project_buttons;
}

// Component containing the Project page and it's children
export class ProjectPage extends React.Component{
  render(){
    // Create and layout project cards
    var project_cards = [];
    Object.entries(cards).forEach((item, i) => {
      project_cards.push(<ProjectCard key={i} card={item[1]} />)
    });

    return (
      <section id={'project'}>
        <div><h2 >Projects</h2></div>
        <div className={'selection-container'}>
          <ProjectSelection />
        </div>
        <div id={'project-container'} >
          {  project_cards }
        </div>
      </section>
    );
  }
}
