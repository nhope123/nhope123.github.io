import React from 'react';

// Component containing the form elements for the Home page
export default class HomePage extends React.Component{
  render(){
    return (
      <section id={'home'}>
        <div id={'nameIntro'} >Nial Hope</div>
        <div id={'introContent'}>A React Front-End Developer and an aspiring Full-Stack developer </div>
      </section>
    );
  }
}
