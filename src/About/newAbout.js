import React, { useEffect, useState, useRef } from 'react';
import './newAbout.scss';
import 'animate.css/animate.min.css';
import Item1 from './Item1';
import Item2 from './Item2';

import 'react-vertical-timeline-component/style.min.css';

export default function NewAbout(props) {
    return (
        <div className="aboutContainer">
            <Item1 />
            <Item2 />
            <div className="item2">Fim</div>
        </div>
    );
}
