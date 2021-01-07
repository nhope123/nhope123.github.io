import React from 'react';

export class Intro extends React.Component{
  render(){
    return(
      <section id={'home'}>
        <div id={'nameIntro'}className={'animate__animated animate__bounce'}>Nial Hope</div>
        <div id={'introContent'}>A Front End Developer and an aspiring Full-Stack developer </div>
      </section>
    )
  }
}
