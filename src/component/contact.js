import React from 'react';
import {changeName,changeEmail,changeComment,sendEmail,isVarified} from './../redux/actions/contact_action.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReCAPTCHA from "react-google-recaptcha";
const SITEKEY = '6LdhMJ8aAAAAAH_N_KhC-f46betAJ6TaD5nnb4Ha';

const mapStateToProps = (state)=>{
  return {
    name: state.contact.name,
    email: state.contact.email,
    comment: state.contact.comment,
    email_transfer: state.contact.emailSuccess,
    human: state.contact.human
  }
};

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({
    changeName:changeName,
    changeEmail:changeEmail,
    changeComment:changeComment,
    submitForm: sendEmail,
    varify: isVarified
  },dispatch)
}

// Component containing the form elements for the contact page
const Form = (props) => {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      (props.human)? (
        props.callbacks[3]([
                            event.target[0].value,
                            event.target[1].value,
                            event.target[2].value,
                          ])): alert('Are you human?')
                      }} >
      <div >
        <label htmlFor={'formName'}  >Name:</label>
        <input id={'formName'} type={'text'} tabIndex={'0'} placeholder={'John'}
          required value={props.name} onChange={(event)=>props.callbacks[0](event)}
         />
      </div>
      <div >
        <label htmlFor={'formEmail'} >Email:</label>
        <input id={'formEmail'} type={'email'} tabIndex={'0'}  placeholder={'email@example.com'}
          required value={props.email} onChange={(event)=>props.callbacks[1](event)} />
      </div>
      <div >
        <label htmlFor={'comment'} >Message:</label>
        <textarea id={'comment'} type={'text'} tabIndex={'0'} placeholder={'Message.'}
          required  value={props.comment} onChange={(event)=>props.callbacks[2](event)}>
        </textarea>
      </div>
      <ReCAPTCHA className={'varify'} sitekey={SITEKEY} onChange={props.callbacks[4]} />
      <div>
        <input id={'submit'} type={'submit'} value={'Send'} />
        {/* <button id={'submit'} type={'submit'} value={'submit'} > Send</button> */}
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
        <a href={'https://www.linkedin.com/in/nialhope/'} target={'_blank'} rel={'noreferrer'} tabIndex={'0'}>
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
class ContactPage extends React.Component{
  render(){
    const formdata = {
      name: this.props.name, email: this.props.email,
      comment: this.props.comment, human: this.props.human,
      callbacks: [this.props.changeName,this.props.changeEmail,
                  this.props.changeComment,this.props.submitForm,
                  this.props.varify
                ]
    }
    return (
      <section  id={'contact'}>
        <div><h2>Contact</h2></div>
        {
          (this.props.email_transfer === 'email sent')? (
            <div className={'success'}>
              <p>Thank you <b>{this.props.name}</b>.</p>
              <p> Your email was sent successfully.</p>
            </div>
          ):
          (this.props.email_transfer === 'email fail')? (
            <div className={'success'}>
              <p> Sorry <b>{this.props.name}</b>.</p>
              <p> Unfortunately your email was not sent.</p>
              <p> Please use the contact options below.</p>
            </div>
          ):
          <Form {...formdata}/>
        }

        <Footer />
        <div id={'copyright'}>nhope&copy; 2021</div>
      </section>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactPage);
