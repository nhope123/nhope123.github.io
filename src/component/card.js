import React from 'react';

// Component to display project information
const Card = (props)=>{
  console.log(props.card);
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
        <div > {props.card.tags.join(" ")} </div>
        <div className={'card-links'}>
          <a href={props.card.repository} >
            <span className={'fa fa-github'} aria-hidden={'true'}></span>
          </a>
          <a href={props.card.website} >
            <span className={'fa fa-ravelry'} aria-hidden={'true'} ></span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Card;
