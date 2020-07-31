import React from 'react';
import { NavLink } from 'react-router-dom';
import AppleStore from '../../assets/images/apple-store.png'
import GoogleStore from '../../assets/images/google-store.png'
import MicrosoftStore from '../../assets/images/microsoft-store.png'
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="footer-link">
                    <ul>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Term and Conditions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Privacy Policy</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Collectin Statement</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Help</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Privacy Policy</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#">Manage Account</NavLink>
                        </li>
                    </ul>
                </div>
                <p className="copy-right">Copyright &copy; 2016 Demo Streaming. All Rights Reserved</p>
                <div className="logos">
                    <div className="social-media">
                        <ul>
                            <li><NavLink to="#"><i className="fa fa-facebook" aria-hidden="true" /></NavLink></li>
                            <li><NavLink to="#"><i className="fa fa-twitter" aria-hidden="true" /></NavLink></li>
                            <li><NavLink to="#"><i className="fa fa-instagram" aria-hidden="true" /></NavLink></li>
                        </ul>
                    </div>
                    <div className="company-logo">
                        <ul>
                            <li><img src={GoogleStore} /></li>
                            <li><img src={AppleStore} /></li>
                            <li><img src={MicrosoftStore} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
