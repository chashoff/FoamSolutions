import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { FaPhone } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';

const Footer = () => (
    <div className="container">
        <div style={{ marginBottom: '1em' }} className="flex-container-row space-out">
            <div className="flex-container-column">
                <h4 className="header">NFPA Codes</h4>
                <Link className="footer-item" to="/code-11">Code 11</Link>
                <Link className="footer-item" to="/code-16">Code 16</Link>
                <Link className="footer-item" to="/code-25">Code 25</Link>
                <Link className="footer-item" to="/code-30">Code 30</Link>
                <Link className="footer-item" to="/code-409">Code 409</Link>
                <Link className="footer-item" to="/code-418">Code 418</Link>
                <Link className="footer-item" to="/code-1925">Code 1925</Link>
            </div>
            <div className="flex-container-column">
                <h4 className="header">Navigation</h4>
                <Link className="footer-item" to="/">Home</Link>
                <Link className="footer-item" to="/about">About</Link>
                <Link className="footer-item" to="/contact">Contact Us</Link>
                <Link className="footer-item" to="/nfpa">NFPA Codes</Link>
            </div>
            <div className="flex-container-column">
                <h4 className="header">Contact</h4>
                <div className="flex-container-row align-middle">
                    <FaPhone className="icon" />
                    <p>(614)-586-1326</p>
                </div>
                <div className="flex-container-row align-middle">
                    <MdLocationOn className="icon" />
                    <p>2251 Performance Parkway,<br />Columbus, OH 43207</p>
                </div>
                <div className="flex-container-row align-middle">
                    <MdEmail style={{ paddingTop: '.25em' }} className="icon" />
                    <p>ps@fs131.com</p>
                </div>
            </div>
        </div>
        <div style={{ marginTop: '.5em' }} className="flex-container-column under-container">
            <div className="grid-item">
                <p>&copy;2021 Foam Solutions, LLC FM Certified and Patented Foam Proportioner Testing</p>
            </div>
            <div className="grid-item flex-container-row">
                <p className="patent-item">U.S. Patent 7,080,694.</p>
                <p className="patent-item">U.S. Patent 7,513,315</p>
                <p className="patent-item">&nbsp;International Patents</p>
                <p className="patent-item">&nbsp;Other Patents Pending</p>
            </div>
            <div style={{ marginBottom: '.5em', justifyContent: 'center' }} className="flex-container-row align-middle">
                <p style={{ fontSize: '.4em' }}>Created by:</p>
                <img style={{ paddingLeft: '.25em', height: '25px' }} src="/images/Asset_1.svg" alt="" />
            </div>
        </div>
    </div>
)
export default Footer;