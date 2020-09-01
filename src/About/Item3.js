import React, { useEffect, useRef, createRef } from 'react';
import './Item3.scss';
import JsLogo from './skillPhotos/js.png';
import { Power3, Power1, gsap, Back } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import arduinoLogo from './skres/arduino.png';
import cLogo from './skres/c.svg';
import cadLogo from './skres/cad.png';
import codesysLogo from './skres/codesys.svg';
import jsLogo from './skres/js.svg';
import linuxLogo from './skres/linux.png';
import matlabLogo from './skres/matlab.jpeg';
import multisimLogo from './skres/multisim.jpg';
import piLogo from './skres/pi.webp';
import ptLogo from './skres/pt.svg';
import pyLogo from './skres/py.svg';
import spLogo from './skres//sp.svg';
import sqlLogo from './skres/sql.jpg';
import stmLogo from './skres/stm.jpg';
import ukLogo from './skres/uk.svg';
import unityLogo from './skres/unity.jpg';
import windowsLogo from './skres/windows.png';

/* export function progCard(name, description, logo) {
    return (
        <div className="progCardContainer">
            <img src={logo} alt="Logo" className="progCardContainer__picLogo" />
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}
 */
export class ProgCard extends React.Component {
    render() {
        return (
            <>
                <img
                    src={this.props.logo}
                    alt="Logo"
                    className="progCardContainer__picLogo"
                />
                <div className="progCardContainer__textContainer">
                    <h1>{this.props.nome}</h1>
                    <p>{this.props.description}</p>
                </div>
            </>
        );
    }
}

export default function Item3(array, title) {
    let cardsTargets = useRef(null);

    let titleSkills = useRef(null);
    let titleSkillsText = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.core.globals('ScrollTrigger', ScrollTrigger);

        gsap.set(cardsTargets.children, { x: 1000 });

        ScrollTrigger.batch(cardsTargets.children, {
            //interval: 0.1, // time window (in seconds) for batching to occur.
            //batchMax: 3,   // maximum batch size (targets)
            onEnter: (batch) =>
                gsap.to(batch, {
                    opacity: 1,
                    x: 0,
                    stagger: { each: 0.15, grid: [1, 3] },
                    overwrite: true,
                }),
            onLeave: (batch) =>
                gsap.set(batch, { opacity: 0, x: -100, overwrite: true }),
            onEnterBack: (batch) =>
                gsap.to(batch, {
                    opacity: 1,
                    x: 0,
                    stagger: 0.15,
                    overwrite: true,
                }),
            onLeaveBack: (batch) =>
                gsap.set(batch, { opacity: 0, x: 100, overwrite: true }),
            // you can also define things like start, end, etc.
        });

        // when ScrollTrigger does a refresh(), it maps all the positioning data which
        // factors in transforms, but in this example we're initially setting all the ".box"
        // elements to a "y" of 100 solely for the animation in which would throw off the normal
        // positioning, so we use a "refreshInit" listener to reset the y temporarily. When we
        // return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
        /*  ScrollTrigger.addEventListener('refreshInit', () =>
            gsap.set(cardsTargets.children, { x: 0 })
        ); */

        gsap.from(titleSkills, {
            duration: 5,
            y: -200,
            opacity: 0,

            scrollTrigger: {
                trigger: titleSkills,
                scrub: true,
                start: 'bottom 90%',
                end: 'bottom 50%',

                // markers: {
                //     Color: 'black',

                //     fontSize: '20px',
                // },
            },
        });
    }, []);

    useEffect(() => {
        console.log(cardsTargets);
    }, []);

    return (
        <div className="Item3Container">
            <div ref={(el) => (titleSkills = el)}>
                <p className="skills">{title}</p>
            </div>

            <div className="item3Content" ref={(el) => (cardsTargets = el)}>
                {array.map(function (el, i) {
                    return (
                        /* progCard(el.nome, el.desc, el.photo); */
                        <div className="progCardContainer ">
                            <ProgCard
                                nome={el.name}
                                description={el.details}
                                logo={el.pic}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
