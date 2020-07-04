import React from 'react'
import { Drawer, ClickAwayListener, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.css'
import { MdHome, MdContactMail } from 'react-icons/md'
import { FaBookmark, FaClipboardList } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavDrawer = ({ isOpen, onHide }) => (
    <ClickAwayListener onClickAway={onHide}>
        <Drawer
            variant='persistent'
            docked='false'
            anchor='right'
            open={isOpen}
            data-aos="slide-right" data-aos-duration="1000">
            <div style={styles.container}>
                <div className="drawer-header">
                    <img style={{ height: '110px' }} src={'/images/stacked_logo.svg'} alt="" />
                </div>
                <div>
                    <div className="icon-container">
                        <MdHome className="icon" />
                        <Link className="side-nav-link" to="/">Home</Link>
                    </div>
                    <Divider />
                    <div className="icon-container">
                        <FaBookmark className="icon" />
                        <Link className="side-nav-link" to="/about">About</Link>
                    </div>
                    <Divider />
                    <div className="icon-container">
                        <FaClipboardList className="icon" />
                        <Link className="side-nav-link" to="/codes">NFPA Codes</Link>
                    </div>
                    <Divider />
                    <div className="icon-container">
                        <MdContactMail className="icon" />
                        <Link className="side-nav-link" to="/contact">Contact</Link>
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