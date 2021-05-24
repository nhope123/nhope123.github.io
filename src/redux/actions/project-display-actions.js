// Default values
const FULLPROJECTLIST = [
      'weather','converter','mixer','clock','calculator',
      'quote','markdown','product','tribute','form','tutorial','portfolio',
    ];
const REACTPROJECTLIST = [
      'weather','converter','mixer',
      'clock','calculator','quote','markdown','portfolio'
    ];
const SASSPROJECTLIST = ['weather','converter'];
const REDUXPROJECTLIST = ['weather','converter'];
const DEFAULTSTATE = {
      buttonPressed: 'All',
      projectList: FULLPROJECTLIST
    };

// Actions
const DISPLAYALL   = 'display all projects';
const DISPLAYSASS  = 'display sass projects';
const DISPLAYREACT = 'display react projects';
const DISPLAYREDUX = 'display redux projects';

//Action creators
export const displayAllProjects = ()=>{
  return {
    type: DISPLAYALL,
    data: FULLPROJECTLIST
  }
};
export const displaySassProjects = ()=>{
  return {
    type: DISPLAYSASS,
    data: SASSPROJECTLIST
  }
};
export const displayReactProjects = ()=>{
  return {
    type: DISPLAYREACT,
    data: REACTPROJECTLIST
  }
};
export const displayReduxProjects = ()=>{
  return {
    type: DISPLAYREDUX,
    data: REDUXPROJECTLIST
  }
};

// Reducer
export const projectSelectionReducer = (state = DEFAULTSTATE, action)=>{
  switch (action.type) {
    case DISPLAYSASS:
      return {buttonPressed:'Sass', projectList: SASSPROJECTLIST};
    case DISPLAYREACT:
      return {buttonPressed:'React', projectList: REACTPROJECTLIST};
    case DISPLAYREDUX:
      return {buttonPressed:'Redux', projectList: REDUXPROJECTLIST};
    case DISPLAYALL:
      return DEFAULTSTATE;
    default:
    return state;
  }
};
