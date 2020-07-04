import React from 'react';
import './index.css';

const Form = () => (
    <form name="contact" method="POST" className="form-container">
        <div className="flex">
            <p>Your first name...</p>
            <input className="form-input" type="text" id="fname" name="fname" placeholder="Jane" />
        </div>
        <div className="flex">
            <p>Your last name...</p>
            <input className="form-input" type="text" id="lname" name="lname" placeholder="Doe" />
        </div>
        <div className="flex">
            <p>Your work email...</p>
            <input className="form-input" type="email" id="email" name="email" placeholder="jane.doe@example.com" />
        </div>
        <div className="flex">
            <p>Country...</p>
            <input className="form-input" type="text" id="country" name="country" placeholder="United States" />
        </div>
        <div className="flex">
            <div style={{width: '40%'}}>
                <p>Anything else?</p>
                <p style={{ fontSize: '.6em', color: 'darkgrey'}}>Tell us about your project, needs, and timeline.</p>
            </div>
            <textarea style={{resize: 'none'}} className="form-input" id="messagebox" rows="8" placeholder="Message here..." />
        </div>
        <button className="submit-button">Submit</button>
    </form>
)
export default Form;