import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, withRouter } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import MyHeader from './myHeader';
import About from './About/About';
import { CSSTransition } from 'react-transition-group';
import newAbout from './About/newAbout';
function App(props) {
    const [state, setState] = useState(false);

    useEffect(() => {
        document.title = 'Gonçalo Duarte';
    }, []);

    function pathToGRid() {
        if (window.location.pathname === '/') {
            return 'App App--Home';
        } else {
            return 'App';
        }
    }
    const routes = [
        { path: '/', name: 'Home', Component: Home },
        { path: '/about', name: 'About', Component: newAbout },
        { path: '/contact', name: 'Contact', Component: Contact },
    ];

    return (
        <div className="App ">
            <MyHeader />

            {/*<Switch>*/}
            {/*    <Route exact path="/">*/}
            {/*        <Home />*/}
            {/*    </Route>*/}
            {/*    <Route exact path="/about">*/}
            {/*        <About />*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
            {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={0}
                            classNames=""
                            unmountOnExit
                        >
                            <div className="page">
                                <Component />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
            {/*<div className="Content"> Content</div>*/}
        </div>
    );
}

export default withRouter(App);
