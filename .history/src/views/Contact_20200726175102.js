import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import '../styles/Contact.css'
import NavBar from '../components/navigation';
import Footer from '../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class Contact extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f2f7ff', position: 'relative', height: '100vh' }}>
                <NavBar />
                <div data-aos="fade-up" data-aos-duration="500">
                    <h1 style={{ textAlign: 'center', margin: '3em auto .75em auto' }}>HAVE SOME QUESTIONS?</h1>
                    <div className='contact-address'>
                        <img src='/images/globe.svg' alt='' />
                        <p>UNITED STATES</p>
                        <p>&nbsp;:&nbsp;</p>
                        <p>2251 Performance Parkway, Columbus, OH 43207</p>
                    </div>
                    <div>
                        <div className='contact'>
                            <img height="24px" src='/images/phone.svg' alt="" />
                            <p>+1-(614)-586-1326</p>
                        </div>
                    </div>
                    <div className='contact-grid'>
                        <form name="contact" method="POST" netlify>
                            <p style={{ textAlign: 'center', color: 'darkgrey', fontSize: '.8em', paddingBottom: '.5em' }}>There is no such thing as a dumb question! Please, ask away!</p>
                            <TextField style={{ backgroundColor: 'white' }} className='input' netlify name="Name" id="outlined-basic" size="small" label="Name" required variant="outlined" />
                            <TextField style={{ backgroundColor: 'white' }} className='input' netlify name="Email" id="outlined-basic" size="small" label="Email" required variant="outlined" />
                            <TextField style={{ backgroundColor: 'white' }} className='input' netlify name="Company" id="outlined-basic" size="small" label="Company" required variant="outlined" />
                            <TextField style={{ backgroundColor: 'white' }} className='input' netlify name="Message" id="outlined-basic" size="small" label="Message" multiline required variant="outlined" rows="6" />
                            <div data-netlify-recaptcha="true"></div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Contact

const styles = {
    column: {
        display: 'flex',
        flexDirection: 'column'
    }
}