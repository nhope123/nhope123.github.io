import React from 'react';
import {NavLink} from 'react-router-dom';

// Scrolling Navigation
class ScrollNav extends React.Component{
  render(){
    return(
      <nav >
        <NavLink to="/" exact  >
          <div id={this.props.ids[0]}  tabIndex='0'>Home</div>
        </NavLink>
        <NavLink to="/bio" >
          <div id={this.props.ids[1]} tabIndex='0'>Bio</div>
        </NavLink>
        <NavLink to="/projects" >
          <div id={this.props.ids[2]} tabIndex='0'>Project</div>
        </NavLink>
        <NavLink to="/contact">
          <div id={this.props.ids[3]} tabIndex='0'>Contact</div>
        </NavLink>


      </nav>
    );
  }

}

/*
<nav >
  <div id={'navOne'} className={'active'} tabIndex='0'>Home</div>
  <div id={'navTwo'} tabIndex='0'>About</div>
  <div id={'navThree'} tabIndex='0'>Project</div>
  <div id={'navFour'} tabIndex='0'>Contact</div>
</nav>
*/

export class Navigation extends React.Component{
  render(){
    // Navigation ids
    const navIds = ['navOne','navTwo','navThree','navFour'];
    return (
      <div id={'navbar'} >
        <ScrollNav ids={navIds} />
      </div>
    );
  }
}
