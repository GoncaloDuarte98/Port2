import React, { useState } from 'react';
import './Home.scss';
import homePhoto from './hw.png';
import welcomeText from './welcomeHome.png';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';
import { withRouter } from 'react-router-dom';
import cvIcon from './cv.png';

function Home() {
    console.log();
    return (
        <div className="Home">
            <img className="photo" src={homePhoto} />
            <div className="homeContent">
                <img className="homeContent__photo" src={welcomeText} />
                <a
                    href="https://drive.google.com/uc?export=download&id=1-KEkjDNiIo0CcDhVRXN5e4V4tNo-ab-C"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="homeContent__CVphoto"
                >
                    <img  alt="cv" src={cvIcon} />
                </a>
            </div>
        </div>
    );
}

export default withRouter(Home);
