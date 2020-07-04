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
            <div style={styles.container}>
                <div className="nav-items-wide" style={styles.navContainer}>
                    <NavLink className="one" to='/' style={styles.navLinks}>Home</NavLink>
                    <a className="two" href="#section1" style={styles.navLinks}>About</a>
                    <NavLink className="three" to='/' style={styles.navLinks}>NFPA Codes</NavLink>
                    <NavLink className="four" to='/contact' style={styles.navLinks}>Contact</NavLink>
                </div>
                <FaBars className="hamburger-menu" style={{ fontSize: '1.5em', color: 'darkgrey' }} onClick={this.handleNavClose} />
            </div>
        )
    }
}
export default NavBar

const styles = {
    container: {

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