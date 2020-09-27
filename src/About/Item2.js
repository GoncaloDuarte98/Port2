import React, { useEffect, useRef } from 'react';
import ZarcoPhoto from './zarco.jpg';
import FeupPhoto from './feup.jpeg';
import PoznanPhoto from './poznan.png';
import { Power3, Power1, gsap, Back } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Item2.scss';
import {
    Container,
    Card,
    CardDeck,
    CardGroup,
    Carousel,
} from 'react-bootstrap';

function NewCard({ local, photo }) {
    return (
        <Card md={12} className="p-0 m-3 border-0 rounded-lg">
            <Card.Img
                variant="top"
                src={photo}
                className="NewCardImageMorph  rounded-lg"
            />
            <Card.Body>
                <Card.Title>{local.name}</Card.Title>
                <Card.Text>{local.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{local.date}</Card.Footer>
        </Card>
    );
}

// function oldCard(local, photo, right) {
//     let CardContainer = useRef(null);

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);
//         gsap.core.globals('ScrollTrigger', ScrollTrigger);
//         //CarfEnter
//         gsap.from(CardContainer, {
//             x: right ? '100%' : '-100%',

//             opacity: 0,
//             ease: Power3.easeOut,

//             // duration: 2,

//             scrollTrigger: {
//                 trigger: CardContainer,
//                 scrub: 1,

//                 start: 'center bottom',
//                 end: 'bottom 75%',
//                 // markers: {
//                 //     Color: 'black',

//                 //     fontSize: '20px',
//                 // },
//             },
//         });
//     }, []);

//     function rightOrLeft(right) {
//         if (right) {
//             return ' Card__Container Card__Container--right';
//         } else {
//             return ' Card__Container';
//         }
//     }
//     function rightOrLeftPhoto(right) {
//         if (right) {
//             return ' Card__Container__photo  Card__Container__photo--right';
//         } else {
//             return ' Card__Container__photo';
//         }
//     }

//     return (
//         <div className={rightOrLeft(right)} ref={(el) => (CardContainer = el)}>
//             <img className={rightOrLeftPhoto(right)} src={photo} />
//             <div className="Card__Container__TextDiv">
//                 {' '}
//                 <h1>{local.name}</h1>
//                 <h2>{local.date}</h2>
//                 <p>{local.text}</p>
//             </div>
//         </div>
//     );
// }

function carItem({ local, photo }) {
    return (
        <Carousel.Item>
            <img className="d-block w-100" src={photo} alt="First slide" />
            <Carousel.Caption>
                <h3>{local.name}</h3>
                <h5>{local.date}</h5>
                <p>{local.text}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default function Item2(Props) {
    const Zarco = {
        name: 'Escola Secundária João Gonçalves Zarco',
        date: '2011-2016',
        text:
            'Twelve years of schooling – European Qualification Framework (EQF) – Level 4. Completed school in 2016 taking part in a project called “Pós-Zarco” from the 10th to the 12th which grouped the best students from the school in one class',
    };

    const Feup = {
        name: 'Faculdade de Engenharia da Universidade do Porto',
        date: '2016',

        text:
            'Currently in the 5th and last year of Master in Electrical and Computers Engineering. Automation and robotics',
    };

    const Poznan = {
        name: 'Politechnika Poznańska ',
        date: '2019-2020',

        text: 'Studied one semester in Poznan, Poland - Erasmus program',
    };

    let TitleContainer = useRef(null);
    let CardContainer = useRef(null);

    let Title = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.core.globals('ScrollTrigger', ScrollTrigger);
        //TitleEnter
        gsap.from(TitleContainer, {
            duration: 5,
            y: -50000,
            opacity: 0,

            scrollTrigger: {
                trigger: Title,
                // pin: true,
                scrub: 1,

                start: 'bottom 80%',
                end: 'bottom 50%',

                // markers: {
                //     Color: 'black',

                //     fontSize: '20px',
                // },
            },
        });

        gsap.from(CardContainer, {
            duration: 5,
            y: +50000,
            opacity: 0,

            scrollTrigger: {
                trigger: Title,
                // pin: true,
                scrub: 1,

                start: 'bottom 80%',
                end: 'bottom 50%',

                // markers: {
                //     Color: 'black',

                //     fontSize: '20px',
                // },
            },
        });
    }, []);

    return (
        <Container className=" my-5">
            <Container
                ref={(el) => (Title = el)}
                className=" mb-5 mt-5 Container__Title"
            >
                <div ref={(el) => (TitleContainer = el)}>EDUCATION</div>
            </Container>
            {/* <CardGroup className="mt-5 mb-5" ref={(el) => (CardContainer = el)}>
                <NewCard local={Zarco} photo={ZarcoPhoto} />
                <NewCard local={Feup} photo={FeupPhoto} />
                <NewCard local={Poznan} photo={PoznanPhoto} />
            </CardGroup> */}
            {/* <div className="Container__Content">
                {Card(Zarco, ZarcoPhoto, true)}
                {Card(Feup, FeupPhoto, false)}
                {Card(Poznan, PoznanPhoto, true)}
            </div> */}

            <Container fluid ref={(el) => (CardContainer = el)} classNamer="rounded-lg">
                <Carousel  interval={99999} className=" text-white rounded-lg">
                    <Carousel.Item>
                        <img
                            className=" w-100 blackedimg rounded-lg"
                            style={{
                                height: '65vh',
                                objectFit: 'cover',
                            }}
                            src={ZarcoPhoto}
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-left">
                            <h3>{Zarco.name}</h3>
                            <h4>{Zarco.date}</h4>
                            <p>{Zarco.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>{' '}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 blackedimg rounded-lg"
                            style={{ height: '65vh', objectFit: 'cover' }}
                            src={FeupPhoto}
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-left">
                            <h3>{Feup.name}</h3>
                            <h4>{Feup.date}</h4>

                            <p>{Feup.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>{' '}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 blackedimg rounded-lg"
                            style={{ height: '65vh', objectFit: 'cover' }}
                            src={PoznanPhoto}
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-left">
                            <h3>{Poznan.name}</h3>
                            <h4>{Poznan.date}</h4>

                            <p>{Poznan.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>{' '}
                </Carousel>
            </Container>
        </Container>
    );
}
