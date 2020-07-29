import React from 'react'
import { Drawer, ClickAwayListener, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.css'
import { MdHome, MdContactMail } from 'react-icons/md'
import { FaBookmark, FaClipboardList } from 'react-icons/fa';

const NavDrawer = ({ isOpen, onHide }) => (
    <ClickAwayListener onClickAway={onHide}>
        <Drawer
            variant='persistent'
            docked='false'
            anchor='right'
            open={isOpen}>
            <div style={styles.container}>
                <div className="drawer-header">
                    <img style={{ height: '110px' }} src={'/images/stacked_logo.svg'} alt="" />
                </div>
                <div>
                    <div className="icon-container">
                        <MdHome className="icon" />
                        <a onClick={onHide} href="#Home" className="side-nav-link">Home</a>
                    </div>
                    <Divider />
                    <div className="icon-container">
                        <FaBookmark className="icon" />
                        <a onClick={onHide} href="#About" className="side-nav-link">About</a>
                    </div>
                    <Divider />
                    <div className="icon-container">
                        <FaBookmark className="icon" />
                        <a onClick={onHide} href="#About" className="side-nav-link">About</a>
                    </div>
                    <Divider />
                    <div className="icon-container">
                        <FaClipboardList className="icon" />
                        <a className="side-nav-link" href="#Location">Location</a>
                    </div>
                    <Divider />
                    <div className="icon-container">
                        <FaClipboardList className="icon" />
                        <a className="side-nav-link" href="#Testimonials">Testimonials</a>
                    </div>
                    <Divider />
                    <div className="icon-container">
                        <MdContactMail className="icon" />
                        <a onClick={onHide} className="side-nav-link" href="#Contact">Contact</a>
                    </div>
                </div>
            </div>
        </Drawer>
    </ClickAwayListener>
)
export default NavDrawer;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '50vw'
    },
    header: {
        display: 'flex',
        marginBottom: '.5em'
    }
}