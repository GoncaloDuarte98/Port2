import React from 'react';
import { withRouter } from 'react-router-dom';

import './myHeader.scss';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function MyHeader(props) {
    function routeToClassname(path) {
        if (props.location.pathname === path) {
            return 'Header__button Header__button--selected';
        } else {
            return 'Header__button';
        }
    }

    function routeToHeaderClassname() {
        if (props.location.pathname === '/') {
            return 'Header Header--Home';
        } else {
            return 'Header';
        }
    }

    return (
        <div className={routeToHeaderClassname()}>
            <Link to={'/'} className={routeToClassname('/')}>
                HOME
            </Link>
            <Link to={'/about'} className={routeToClassname('/about')}>
                ABOUT
            </Link>
            <Link to={'/contact'} className={routeToClassname('/contact')}>
                CONTACT
            </Link>
        </div>
    );
}

export default withRouter(MyHeader);
