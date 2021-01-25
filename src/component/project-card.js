import React from 'react';
import {CardIcon} from './bio-cards.js';
import {frameworkIconData} from './../resources/objects/about-cards-detail.js';

// Component to display project information
const ProjectCard = (props)=>{
  const framework = [];
  frameworkIconData.forEach((item, i) => {
    if (props.card.tags.includes(item.name) ) {
      framework.push(<CardIcon key={i} {...item} />)
    }
  });

  //console.log(iconData);
  //const tag = props.card.tags.join(" ");
  return (
    <div  className={'card-container'} tabindex={'0'}>
      {/* Visible screenshot */}
      <div className={'screenshot'}>
        <img src={props.card.src} alt={props.card.alt} />
      </div>
      {/* Modal with project information */}
      <div className={'card-info'}>
        <div ><h3> {props.card.name} </h3></div>
        <div > {props.card.description} </div>
        <div className={'project-framework'} > {framework} </div>
        <div className={'card-links'}>
          <a href={props.card.repository} title={'Github Repo'} >
            <span className={'fa fa-github'} aria-hidden={'true'}></span>
          </a>
          <a href={props.card.website} title={'Website'}>
            <span className={'fa fa-ravelry'} aria-hidden={'true'} ></span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;
