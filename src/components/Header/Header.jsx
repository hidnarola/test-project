import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './Header.scss';

const getSubTtle = (props) => {
    switch (props.location.pathname) {
        case '/series':
            return 'Series'
        case '/movies':
            return 'Movies'
        default:
            return 'Titles'
    }
}

const Header = (props) => {
    return (
        <div className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="head-container">
                        <div className="brand-name">
                            <NavLink to="/">DEMO Streaming</NavLink>
                        </div>
                        <div className="login-trial">
                            <ul>
                                <li>
                                    <NavLink to="#">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" className="fre-trial">Start your free trial</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-sub">
                <div className="container">
                    <div className="title">
                        <h3>Populer {getSubTtle(props)}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header);
