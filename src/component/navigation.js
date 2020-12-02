import React from 'react';

export class Navigation extends React.Component{
  render(){
    return(
      <section >
        <nav id={'navbar'}>
          <div>Home</div>
          <div>About</div>
          <div>Project</div>
          <div>Contact</div>
        </nav>
      </section>
    )
  }
}
