import React from 'react'

const Form = () => (
    <form>
        <div>
            <p>Your first name</p>
            <input type="text" id="fname" name="fname" placeholder="Jane" />
        </div>
        <div>
            <p>Your last name</p>
            <input type="text" id="lname" name="lname" placeholder="Doe" />
        </div>
        <div>
            <p>Your work email</p>
            <input type="email" id="email" name="email" placeholder="jane.doe@example.com" />
        </div>
        <div>
            <p>Country</p>
            <input type="text" id="country" name="fname" placeholder="" />
        </div>
        <div>
            <p>Anything else?</p>
            <textarea id="messagebox" rows="8" />
        </div>
    </form>
)
export default Form;