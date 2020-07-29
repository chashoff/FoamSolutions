import React, { Component } from 'react';
import './nav.css';
import NavDrawer from '../drawers';
import { FaBars } from 'react-icons/fa';



class NavBar extends Component {
    state = {
        isNav: false
    }
    handleNavClose = () => {
        this.setState({ isNav: !this.state.isNav });
    }
    render() {
        if (this.state.isNav === true) {
            return <NavDrawer isOpen={this.state.isNav} onHide={this.handleNavClose} />
        }
        return (
                <div style={{ display: 'flex' }}>
                    <FaBars className="hamburger-menu" style={{ fontSize: '1.5em', color: 'darkgrey', marginLeft: 'auto', paddingRight: '.75em', marginTop: '.75em', }} onClick={this.handleNavClose} />
                    <nav className="fullscreen-nav">
                        <a href="#Home" className="fullscreen-nav-link">Home</a>
                        <a href="#About" className="fullscreen-nav-link">About</a>
                        <a href="#Benefits" className="fullscreen-nav-link"
                        <a href="#Testimonials" className="fullscreen-nav-link">Testimonials</a>
                        <a href="#Location" className="fullscreen-nav-link">Location</a>
                        <a href="#Contact" className="fullscreen-nav-link">Contact</a>
                    </nav>
                </div>
        )
    }
}
export default NavBar