import React from 'react';
import './index.css';

const Form = () => (
    <form className="form-container">
        <div className="flex">
            <p>Your first name</p>
            <input className="form-input" type="text" id="fname" name="fname" placeholder="Jane" />
        </div>
        <div className="flex">
            <p>Your last name</p>
            <input className="form-input" type="text" id="lname" name="lname" placeholder="Doe" />
        </div>
        <div className="flex">
            <p>Your work email</p>
            <input className="form-input" type="email" id="email" name="email" placeholder="jane.doe@example.com" />
        </div>
        <div className="flex">
            <p>Country</p>
            <input className="form-input" type="text" id="country" name="country" placeholder="United States" />
        </div>
        <div className="flex">
            <p>Anything else?</p>
            <textarea className="form-input" id="messagebox" rows="8" placeholder="Tell us about your project, needs, and timeline." />
        </div>
        <
    </form>
)
export default Form;