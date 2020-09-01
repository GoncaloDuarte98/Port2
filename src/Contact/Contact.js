import React from 'react';
import './Contact.scss';
import emailIcon from './email.png';
import linkedInIcon from './in.webp';

export default function Contact() {
    return (
        <div className="contactContainer">
            <div className="emailContainer">
                <img alt="emailIcon" src={emailIcon} />
                <p>goncalo.ferreira.duarte@hotmail.com</p>
            </div>

            <a
                className="emailContainer"
                href="https://www.linkedin.com/in/gon%C3%A7alo-duarte-9ba99717b/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img alt="linkedInIcon" src={linkedInIcon} />
            </a>
        </div>
    );
}
