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

  return (
    <div  className={'card-container'} tabIndex={'0'}>
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
          <a href={props.card.repository} title={'Github Repo'} target={'_blank'} rel={'noreferrer'} tabIndex={'0'} >
            <i className={'fa fa-github'} aria-hidden={'true'}></i>
          </a>
          <a href={props.card.website} title={'Website'}  target={'_blank'} rel={'noreferrer'} tabIndex={'0'} >
            <span className={"fa fa-globe"} aria-hidden={'true'} ></span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;
