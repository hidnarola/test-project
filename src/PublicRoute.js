import React from 'react';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import { Route } from 'react-router-dom';
const PublicRoute = ({ component: Component, showHeader, showFooter, ...rest }) => (
    <Route {...rest} render={(props) => (
        <>
            <Header />
            <Component {...props} />
            <Footer />
        </>
    )} />
)
export default PublicRoute;