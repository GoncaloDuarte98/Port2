import React, { useState } from 'react';
import './About.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from 'react-router-dom';
import Home from '../Home/Home';
import General from './general/General';
import Skills from './skills/Skills';

function AboutDrawer(props) {
    const [aboutWindow, setAboutWindow] = useState('general');

    function pathToDrawerItemClass(path) {
        if (aboutWindow === path) {
            return 'About__Drawer__Items About__Drawer__Items--selected';
        } else {
            return 'About__Drawer__Items';
        }
    }

    return (
        <div className="About__Drawer">
            <Link
                to="/about/"
                className={pathToDrawerItemClass('general')}
                id={'d1'}
                onClick={() => setAboutWindow('general')}
            >
                GENERAL
            </Link>
            <Link
                to="/about/education"
                className={pathToDrawerItemClass('education')}
                onClick={() => setAboutWindow('education')}
            >
                EDUCATION
            </Link>
            <Link
                to="/about/skills"
                className={pathToDrawerItemClass('skills')}
                id={'d3'}
                onClick={() => setAboutWindow('skills')}
            >
                SKILLS
            </Link>
        </div>
    );
}

function About(props) {
    return (
        <Router>
            <div className="About">
                {AboutDrawer(props.location.pathname)}
                <div className="About__Content" id="style-1">
                    <Route exact path="/about/">
                        <General />
                    </Route>
                    <Route exact path="/about/skills">
                        <Skills />
                    </Route>
                </div>
            </div>
        </Router>
    );
}

export default withRouter(About);
