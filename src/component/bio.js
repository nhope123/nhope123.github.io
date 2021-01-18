import React,{Component} from 'react';

export class BioPage extends Component{
  render(){
    return (
      <section id={'bio'}>
        <div><h2>Bio</h2></div>
        <div>
          <h3>Proficiency</h3>
          <div><p>Languages and frameworks I proficiently use.</p></div>
          <div>
            react Redux html css sass javascript python
          </div>
        </div>
        <div>
          <h3>Familiar</h3>
          <div><p>Languages and frameworks I am currently improving my knownwledge on.</p></div>
          <div>
            Bootstrap D3js nodejs mongodb jest
          </div>
        </div>
        <div>
          <h3>Concepts</h3>
        </div>
      </section>
    );
  }
}
