import React from 'react';
import {NavLink} from 'react-router-dom';

// Links to all components
class ScrollNav extends React.Component{
  render(){
    return(
      <nav >
        <NavLink to="/" exact  >
          <div id={this.props.ids[0]}  tabIndex='0'>Home</div>
        </NavLink>
        <NavLink to="/bio" activeClassName={'active black-font'}>
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

// Navigation
export default class Navigation extends React.Component{
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
