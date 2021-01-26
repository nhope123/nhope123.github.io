import React from 'react';
import ProjectCard from './project-card.js';
import cards from './../resources/objects/project-cards-detail.js';
import {frameworkIconData}  from './../resources/objects/about-cards-detail.js';
import * as Display from './../redux/actions/project-display-actions.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Connect store to ProjectPage Component
const mapStateToProps = (state)=>{
  return {
    activeButton: state.selection.buttonPressed,
    projects: state.selection.projectList
  }
};

// Connect actions to ProjectPage Component
const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    selectAll: Display.displayAllProjects,
    selectSass: Display.displaySassProjects,
    selectReact: Display.displayReactProjects,
    selectRedux: Display.displayReduxProjects
  },dispatch);
};

// Component containing the selection choice for project display
class ProjectSelection extends React.Component{
  render(){
    // Create and layout projects buttons
    var project_buttons = [];
    const pButtons = ["React","Redux","Sass"];
    project_buttons.push(<div key={'all'} onClick={this.props.selectAll}
                          className={(this.props.choice === 'All')? 'selected':''}>
                          <span>{'All'}</span></div>);

    frameworkIconData.forEach((item, i) => {
      if (pButtons.includes(item.name)) {
        project_buttons.push(
          <div key={i}
              onClick={
                (item.name === 'Sass')? this.props.selectSass:
                  (item.name === 'React')? this.props.selectReact:
                    this.props.selectRedux
              }
              className={
                (item.name === 'Sass' && this.props.choice === 'Sass')? 'selected':
                  (item.name === 'React' && this.props.choice === 'React')? 'selected':
                    (item.name === 'Redux' && this.props.choice === 'Redux')? 'selected': ''
              } >
          <img src={item.src} alt={item.alt} />
          <span>{item.name}</span>
          </div>
        );
      }
    });
    return(
      <div className={'selection-container'}>
        {project_buttons}
      </div>
    );
  }
}

// Component containing the Project page and it's children
class ProjectPage extends React.Component{
  render(){
    // Create and layout project cards
    var project_cards = [];
    this.props.projects.forEach((item, i) => {
      project_cards.push(<ProjectCard key={i} card={cards[item]} />)
    });

    var propsValues = {
      choice:this.props.activeButton, selectAll: this.props.selectAll,
      selectSass:this.props.selectSass, selectReact: this.props.selectReact,
      selectRedux: this.props.selectRedux
    };

    return (
      <section id={'project'}>
        <div><h2 >Projects</h2></div>
        <ProjectSelection {...propsValues}/>
        <div id={'project-container'} >
          {  project_cards }
        </div>
      </section>
    );
  }
}

 export default connect(mapStateToProps,mapDispatchToProps)(ProjectPage);
