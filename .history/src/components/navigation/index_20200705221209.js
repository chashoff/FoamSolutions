import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        const logo = '/images/main_logo.svg';
        if (this.state.isNav === true) {
            return <NavDrawer isOpen={this.state.isNav} onHide={this.handleNavClose} />
        }
        return (
                <div style={{padding: '.25em 1em .25em 1em', display: 'flex'}}>
                    <FaBars className="hamburger-menu" style={{ fontSize: '1.5em', color: 'darkgrey', marginLeft: 'auto' }} onClick={this.handleNavClose} />
                    <nav className="fullscreen-nav">
                        <a href="#About" className="fullscreen-nav-link">About</a>
                        <a href="#Location" className="fullscreen-nav-link">Location</a>
                        <a className="fullscreen-nav-link">Contact</a>
                    </nav>
                </div>
        )
    }
}
export default NavBar

const styles = {
    container: {
        backgroundColor: '#f2f7ff',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '1em',
        position: 'relative',
        zIndex: 10
    },
    navContainer: {
        paddingTop: '2em,'
    },
    navLinks: {
        color: '#333333',
        padding: '.5em 1.5em',
        margin: '0 1em'
    }
}