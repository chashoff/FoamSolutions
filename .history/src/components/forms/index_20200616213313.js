import React from 'react'

const Form = () => (
    <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname">
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" />
    </form>
)
export default Form;