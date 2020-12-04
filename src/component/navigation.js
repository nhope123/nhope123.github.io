import React from 'react';

export class Navigation extends React.Component{
  render(){
    return(
      <section id={'navbar'} >
        <nav >
          <div id={'navOne'} className={'active'}>Home</div>
          <div id={'navTwo'}>About</div>
          <div id={'navThree'}>Project</div>
          <div id={'navFour'}>Contact</div>
        </nav>
      </section>
    )
  }
}
