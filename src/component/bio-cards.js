import React,{Component} from 'react';

// Component for the languages I know
class ProficiencyCard extends Component{
  render(){
    let proficentEntities = [];
    this.props.frameworks.forEach((item, i) => {
      //console.log(item);
      proficentEntities.push(<CardIcon key={i} {...item} />)
    });


    return (
      <div className={this.props.color + ' about-card'}>
        <div>
          <h3>{this.props.title}</h3>
        </div>
        <div className={'about-card-content'}><p>{this.props.description}</p></div>
        <div className={'about-framework'}>
          {proficentEntities}
          {/* Gets an array of objects containing src, alt, name. on hover a tooltip will show name */}

        </div>
      </div>
    );
  }
}

// Component for the Bio page concept card
export const CardIcon = (props) => {
  console.log(props);
  return (
    <div >
      <img src={props.src} alt={props.alt} tabindex={'0'} />
      <span >{props.name}</span>
    </div>
  );
}

export default ProficiencyCard;
