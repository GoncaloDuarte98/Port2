import React from 'react';
import './Contact.scss';
import emailIcon from './email.png';
import linkedInIcon from './in.webp';
import { Container } from 'react-bootstrap';
import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Contact() {
    return (
        <Container
            Container
            className="h-100  d-flex text-light flex-column justify-content-center align-items-center"
        >
            <Container
                fluid
                className=" d-flex text-light flex-row justify-content-center align-items-center "
            >
                {/* <img alt="emailIcon" src={emailIcon} /> */}
                <AiOutlineMail className="mr-4" size="3em" />
                goncalo.ferreira.duarte@hotmail.com
            </Container>

            <a
                className="h-40 "
                href="https://www.linkedin.com/in/gon%C3%A7alo-duarte-9ba99717b/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <AiOutlineLinkedin size="3em" />
                {/* <img alt="linkedInIcon" src={linkedInIcon} /> */}
            </a>
        </Container>
    );
}
