import React, { useEffect, useState, useRef } from 'react';
import './newAbout.scss';
import 'animate.css/animate.min.css';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';

import 'react-vertical-timeline-component/style.min.css';

export default function NewAbout(props) {
    const lings = [
        {
            name: 'Portuguese',
            pic: require('./skres/pt.svg'),
            details: 'Native',
        },
        {
            name: 'English',
            pic: require('./skres/uk.svg'),
            details: 'C1 level obtained in CAE Cambridge Exam',
        },
        {
            name: 'Spanish',
            pic: require('./skres/sp.svg'),
            details: 'Basic Spanish',
        },
    ];

    const langs = [
        { name: 'C', pic: require('./skres/c.svg'), details: '' },
        { name: 'Python', pic: require('./skres/py.svg'), details: 'OpenCv' },
        {
            name: 'Javascript',
            pic: require('./skres/js.svg'),
            details: 'ES6,ReactJs,React-Native,Redux',
        },
        { name: 'Unity', pic: require('./skres/unity.jpg'), details: 'C#' },
        { name: 'SQL', pic: require('./skres/sql.png'), details: '' },
    ];

    const soft = [
        { name: 'Arduino', pic: require('./skres/arduino.png'), details: '' },
        {
            name: 'STM Nucleo Dev',
            pic: require('./skres/stm.jpg'),
            details: '',
        },
        { name: 'Eagle CAD', pic: require('./skres/cad.png'), details: '' },
        { name: 'Codesys', pic: require('./skres/codesys.svg'), details: '' },
        { name: 'Matlab', pic: require('./skres/matlab.jpeg'), details: '' },
        { name: 'MultiSim', pic: require('./skres/multisim.jpg'), details: '' },
    ];

    const os = [
        { name: 'Windows', pic: require('./skres/windows.png'), details: '' },
        { name: 'Linux', pic: require('./skres/linux.png'), details: '' },
        { name: 'RaspberryPI', pic: require('./skres/pi.webp'), details: '' },
    ];

    return (
        <div className="aboutContainer">
            <Item1 />
            <Item2 />
            {Item3(lings, 'LANGUAGES')}
            {Item3(langs, 'PROGRAMMING')}
            <div className="playStore__container">
                <a
                className="playStore__container__text"
                href="https://play.google.com/store/apps/developer?id=Goncalo+Duarte"
                rel="noopener noreferrer"
                target="_blank"
                >GooglePlay profile</a>
                </div>

            {Item3(soft, 'SOFTWARE')}
            {Item3(os, 'OS')}
            {/*  <div className="item2">Fim</div> */}
        </div>
    );
}
