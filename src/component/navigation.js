import React from 'react';

export class Navigation extends React.Component{
  render(){
    return(
      <section id={'navbar'} >
        <nav >
          <div id={'navOne'} className={'active'} tabindex='0'>Home</div>
          <div id={'navTwo'} tabindex='0'>About</div>
          <div id={'navThree'} tabindex='0'>Project</div>
          <div id={'navFour'} tabindex='0'>Contact</div>
        </nav>
      </section>
    )
  }
}
