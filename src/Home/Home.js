import React, { useState } from 'react';
import './Home.scss';
import { AiOutlineDownload } from 'react-icons/ai';

import homePhoto from './hw.png';
import welcomeText from './welcomeHome.png';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';
import { withRouter } from 'react-router-dom';
import cvIcon from './cv.png';
import { Container, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    console.log();
    return (
        // <div className="Home">
        //     <img className="photo" src={homePhoto} />
        //     <div className="homeContent">
        //         <img className="homeContent__photo" src={welcomeText} />
        //         <a
        //             href="https://drive.google.com/uc?export=download&id=1-KEkjDNiIo0CcDhVRXN5e4V4tNo-ab-C"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //             download
        //             className="homeContent__CVphoto"
        //         >
        //             <img  alt="cv" src={cvIcon} />
        //         </a>
        //     </div>
        // </div>
        <Container
            fluid
            className="d-flex text-light flex-column justify-content-center align-items-center h-100"
        >
            <Container >
                <h1 style={{ fontSize: '40pt' }}>Hello, World!</h1>
                <h2>I'm Gonçalo,</h2>
                <p>Welcome to my page</p>
                    <Button
                        as={Link}
                        to="/about"
                        variant="outline-light"
                        className="rounded-pill"
                    >
                        About me
                    </Button>{' '}
                    <a
                        href="https://drive.google.com/uc?export=download&id=1-KEkjDNiIo0CcDhVRXN5e4V4tNo-ab-C"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        <Button variant="outline-success" className="rounded-pill">
                            CV
                            <AiOutlineDownload />
                        </Button>
                    </a>
            </Container>
        </Container>
    );
}

export default withRouter(Home);
