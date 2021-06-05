import cards from '../../resources/objects/project-cards-detail'

const listedProjects = (anObject, aString) =>{
  let returnList = []
  if(aString === 'full'){
    returnList = Object.keys(anObject)
  }
  else if (aString) {
      returnList = Object.keys(anObject).filter((item) => {
        return (anObject[item].tags.includes(aString));
      })
  }
  return returnList
}
console.log(listedProjects(cards))
// Default values
const FULLPROJECTLIST = listedProjects(cards,'full');
const REACTPROJECTLIST = listedProjects(cards,'React');
const SASSPROJECTLIST = listedProjects(cards,'Sass');
const REDUXPROJECTLIST = listedProjects(cards,'Redux');
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
