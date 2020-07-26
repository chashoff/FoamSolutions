import React, {Component} from 'react';
import './index.css';
import axios from 'axios';

class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        country: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Submit'
    }
    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending'
        });
      
        let data = {
            name: this.state.firstName + " " +this.state.lastName,
            email: this.state.email,
            country: this.state.country,
            message: this.state.message
        }
        
        axios.post('http://localhost.com:3001/api/contactForm', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch((err) => {
            this.setState({
                buttonText: 'Failed to send!'
            });
            console.log(err);
        })
      }

      resetForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            country: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        });
      }

    render() {
        return(
           <form name="contact" onSubmit={ (e) => this.formSubmit(e)} method="POST" className="form-container">
                <div className="flex">
                    <p>Your first name...</p>
                    <input className="form-input" type="text" id="fname" name="fname" placeholder="Jane" onChange={e => this.setState({ firstName: e.target.value})} />
                </div>
                <div className="flex">
                    <p>Your last name...</p>
                    <input className="form-input" type="text" id="lname" name="lname" placeholder="Doe" onChange={e => this.setState({ lastName: e.target.value})} />
                </div>
                <div className="flex">
                    <p>Your work email...</p>
                    <input className="form-input" type="email" id="email" name="email" placeholder="jane.doe@example.com" onChange={e => this.setState({ email: e.target.value})} />
                </div>
                <div className="flex">
                    <p>Country...</p>
                    <input className="form-input" type="text" id="country" name="country" placeholder="United States" onChange={e => this.setState({ country: e.target.value})} />
                </div>
                <div className="flex">
                    <div style={{width: '40%'}}>
                        <p>Anything else?</p>
                        <p style={{ fontSize: '.6em', color: 'darkgrey'}}>Tell us about your project, needs, and timeline.</p>
                    </div>
                    <textarea style={{resize: 'none'}} className="form-input" id="messagebox" rows="8" placeholder="Message here..." onChange={e => this.setState({ message: e.target.value})}/>
                </div>
                <button type="submit" className="submit-button" 
                disabled={(this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.buttonText === '...sending' || this.state.buttonText === 'Message Sent') ? true:false}>
                    {this.state.buttonText}</button>
            </form>
        );
    }
}

export default Form;