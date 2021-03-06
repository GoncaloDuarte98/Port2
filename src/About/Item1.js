import React, { useEffect, useState, useRef } from 'react';
import './Item1.scss';
import 'animate.css/animate.min.css';
import manPhoto from './cv_circle.png';

import 'react-vertical-timeline-component/style.min.css';
import { Power3, Power1, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Item1(props) {
    let div1 = useRef(null);
    let item1__Text = useRef(null);
    let item1__Text__Text = useRef(null);

    let item1__Image = useRef(null);
    let item1__Section = useRef(null);

    useEffect(() => {
        //Intro Timeline
        let item1TimeLine__Intro = gsap.timeline({ autoRemoveChildren: true });
        item1TimeLine__Intro.from(item1__Text, {
            x: '100%',
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: Power3.easeIn,
        });
        item1TimeLine__Intro.from(item1__Image, {
            duration: 1,
            rotation: '-100_clockwise',
            opacity: 0,
            x: '-100%',
            ease: Power3.easeInOut,
        });

        //Text Pin
        gsap.registerPlugin(ScrollTrigger);
        gsap.core.globals('ScrollTrigger', ScrollTrigger);
        gsap.to(item1__Text, {
            ease: Power3.easeIn,
            // x: '100%',
            scrollTrigger: {
                trigger: item1__Text,
                pin: true,
                scrub: true,
                // pin the trigger element while active
                start: 'bottom 50%',
                // start: 'bottom 80%',
                end: 'bottom 30%', // when the top of the trigger hits the top of the viewport

                // markers: {
                //     Color: 'black',
                //
                //     fontSize: '20px',
                // },
            },
        });
        // //Text Exit Slide
        // gsap.to(item1__Text__Text, {
        //     // duration: 2,
        //     x: '100%',
        //     opacity: 0,
        //     ease: Power3.easeOut,
        //     scrollTrigger: {
        //         trigger: item1__Image,
        //         scrub: true,
        //         // pin the trigger element while active
        //         // start: 'bottom 40%',
        //         start: 'bottom center', // when the top of the trigger hits the top of the viewport
        //         end: 'bottom top',
        //         markers: {
        //             Color: 'black',
        //
        //             fontSize: '20px',
        //         },
        //     },
        // });
        // Photo Exit Slide
        // gsap.to(item1__Image, {
        //     duration: 6,
        //     // x: '-150%',
        //     // rotation: '100_clockwise',
        //     // opacity: 0,
        //     x: '-100%',
        //     ease: Power3.easeOut,

        //     // ease: Power3.easeOut,
        //     scrollTrigger: {
        //         trigger: item1__Image,
        //         // scrub: true,
        //         // pin: true,
        //         // pin the trigger element while active
        //         start: '60% center',
        //         // start: 'top center', // when the top of the trigger hits the top of the viewport
        //         // end: '80% 20%',
        //         // markers: {
        //         //     Color: 'black',

        //         //     fontSize: '20px',
        //         // },
        //     },
        // });
    });

    return (
        <div className="item1__Container">
            {/*<div ref={(el) => (item1__Section = el)} className="skewed " />*/}

            <img
                ref={(el) => (item1__Image = el)}
                src={manPhoto}
                alt={'PfPic'}
                className="item1__Container__imageContainer"
            />

            <div
                ref={(el) => (item1__Text = el)}
                className="item1__Container__textContainer"
            >
                <div ref={(el) => (item1__Text__Text = el)}>
                    <h1>Profile</h1>
                    <p>
                        Hello! I am Gonçalo, a 22 year old student from
                        Porto,Portugal. I have been swotting the art of
                        Programming for the last 6 years. I enjoy being
                        challenged and engaging with projects that require me to
                        work outside my comfort and knowledge set and I am
                        always ready to learn new languages and development
                        techniques. Below you can get more details about my
                        skills.
                    </p>
                </div>
            </div>
        </div>
    );
}
