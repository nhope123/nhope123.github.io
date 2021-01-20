import React,{Component} from 'react';
import ProficiencyCard from './bio-cards.js';
import {proficientData,familiarData} from './../resources/objects/about-cards-detail.js';

// Main component for the About page
export class BioPage extends Component{
  render(){

    return (
      <section id={'bio'}>
        <div><h2>Bio</h2></div>
        <ProficiencyCard color={'green-card'} {...proficientData} />
        <ProficiencyCard color={'blue-card'}{...familiarData} />

        <div>
          <h3>Concepts</h3>
          <ul>
            <li>Mobile first development</li>
            <li>Flexbox and Grid responsive development</li>




          </ul>
        </div>
      </section>
    );
  }
}
