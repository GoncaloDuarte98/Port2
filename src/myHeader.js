import React from 'react';
import { withRouter, useLocation } from 'react-router-dom';

import './myHeader.scss';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Nav, Navbar } from 'react-bootstrap';

function MyHeader(props) {
    const loc = useLocation();
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
        // <div className={routeToHeaderClassname()}>
        //     <Link to={'/'} className={routeToClassname('/')}>
        //         HOME
        //     </Link>
        //     <Link to={'/about'} className={routeToClassname('/about')}>
        //         ABOUT
        //     </Link>
        //     <Link to={'/contact'} className={routeToClassname('/contact')}>
        //         CONTACT
        //     </Link>
        // </div>

        <Navbar
            bg=""
            variant="dark"
            sticky="top"
            style={{ backgroundColor: '#000' }}
        >
            <Navbar.Brand as={Link} to="/">
                Gonçalo Duarte
            </Navbar.Brand>
            <Nav className="ml-auto" activeKey={loc.pathname}>
                <Nav.Link as={Link} to="/" eventKey="/">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" eventKey="/about">
                    About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" eventKey="/contact">
                    Contact
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default withRouter(MyHeader);
