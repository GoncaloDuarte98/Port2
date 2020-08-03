import React, { useState } from 'react';
import './Home.scss';
import homePhoto from './hw.png';
import welcomeText from './welcomeHome.png';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';
import { withRouter } from 'react-router-dom';

function Home() {
    console.log();
    return (
        <div className="Home">
            <img className="photo" src={homePhoto} />
            <div className="homeContent">
                <img className="homeContent__photo" src={welcomeText} />
            </div>
        </div>
    );
}

export default withRouter(Home);
