import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
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
            <div className="top-nav">
                <FaBars className="menu-button" />
                <div>

                </div>
            </div>
        )
    }
}
export default NavBar;