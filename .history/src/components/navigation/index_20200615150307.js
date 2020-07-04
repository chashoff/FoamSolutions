import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import NavDrawer from '../drawers';
import { FaBars, FaAutoprefixer } from 'react-icons/fa';



class NavBar extends Component {
    state = {
        isNav: false
    }
    handleNavClose = () => {
        this.setState({ isNav: !this.state.isNav });
    }
    render() {
        const logo = '/images/main_logo.svg';
        return (
            <>
                <FaBars style={{ fontSize: '1.9rem', marginLeft: 'auto'}} />
            </>
        )
    }
}
export default NavBar

const styles = {
    container: {}
}