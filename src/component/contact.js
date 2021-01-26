import React from 'react';

// Component containing the form elements for the contact page
const Form = () => {
  return (
    <form >
      <div >
        <label htmlFor={'formName'}  >Name:</label>
        <input id={'formName'} type={'text'} tabIndex={'0'} placeholder={'John'} required/>
      </div>
      <div >
        <label htmlFor={'formEmail'} >Email:</label>
        <input id={'formEmail'} type={'email'} tabIndex={'0'}  placeholder={'email@example.com'}required />
      </div>
      <div >
        <label htmlFor={'comment'} >Comment:</label>
        <textarea id={'comment'} type={'text'} tabIndex={'0'} placeholder={'message'} required ></textarea>
      </div>
      <div >
        <button type={'submit'} value={'submit'} > Submit </button>
      </div>
    </form>
  );
}

// Component containing social links, contact info and copyright notice
const Footer = () =>{
  return (
    <footer >
      <div >
        <a href={'https://github.com/nhope123/'} target={'_blank'} rel={'noreferrer'} tabIndex={'0'}>
          <i className={"fa fa-github-square"} aria-hidden="true" title={'Github Repository'} ></i>
        </a>
        <a href={'https://www.linkedin.com/in/nial-hope-b4056a204/'} target={'_blank'} rel={'noreferrer'} tabIndex={'0'}>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a href={'mailto:nhope@ryerson.ca'} tabIndex={'0'}>
          <i className="fa fa-envelope-o" aria-hidden="true" title={'Email'} ></i>
        </a>
        <a href={'tel:647-409-0734'} tabIndex={'0'}>
          <i className={"fa fa-phone-square"} aria-hidden="true" title={'Phone'} ></i>
        </a>
      </div>
    </footer>
  );
}

// Contact Page main component
export default class ContactPage extends React.Component{
  render(){
    return (
      <section  id={'contact'}>
        <div><h2>Contact</h2></div>
        <Form />
        <Footer />
        <div id={'copyright'}>nhope&copy; 2021</div>
      </section>
    );
  }
}
