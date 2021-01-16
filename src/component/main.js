import React from 'react';
import {Navigation} from './navigation.js';
import {HomePage} from './home.js';
import {ContactPage} from './contact.js';
import {BioPage} from './bio.js';
import {ProjectPage} from './projects.js';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';


//  Central container for all app components passed to HTML file
export class Portfolio extends React.Component{
  render(){
    return(
      <Router>
        <div id={'main'} >
          <Navigation />
          <Switch >
            <Route path='/' exact component={HomePage} />
            <Route path='/bio' component={BioPage} />
            <Route path='/projects' component={ProjectPage} />
            <Route path='/contact' component={ContactPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
