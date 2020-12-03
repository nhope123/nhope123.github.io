import React from 'react';

export class Navigation extends React.Component{
  render(){
    return(
      <section id={'navbar'} >
        <nav >
          <div id={'active'}>Home</div>
          <div>About</div>
          <div>Project</div>
          <div>Contact</div>
        </nav>
      </section>
    )
  }
}
