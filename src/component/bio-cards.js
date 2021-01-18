import React,{Component} from 'react';

// Component for the languages I know
class ProficiencyCard extends Component{
  render(){
    const frameworks;
    //Object.
    return (
      <div>
        <div>
          <h3>{this.props.title}</h3>
        </div>
        <div><p>{this.props.description}</p></div>
        <div>
          {/* Gets an array of objects containing src, alt, name. on hover a tooltip will show name */}
          react Redux html css sass javascript python
        </div>
      </div>
    );
  }
}

// Component for the Bio page concept card
const CardIcon = (props) => {
  return (
    <div>
      <img src={props.image.src} alt={props.image.alt} />
      <span >{props.image.name}</span>
    </div>
  );
}
