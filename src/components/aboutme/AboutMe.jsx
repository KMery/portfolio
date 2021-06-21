import React from 'react';
import './utils/styles/AboutMe.css'
import Button from 'react-bootstrap/Button';
import foto from './utils/images/kmery.jpeg';
import downarrow from './utils/images/down-arrow.png';

export const AboutMe = () => {
    return (
        <div className="bg-custom aboutme" id="aboutMe">
            <div className="aboutme">
                <h1>Mayra Belén Leiva</h1>
                <h2>Fullstack Web Developer</h2>
                <img src={foto} alt="miFoto" className="foto" /><br/>
            </div>
            <Button variant="info" className="cv-button" target="_blank" href="https://drive.google.com/file/d/1jVzVLQOh7Z0XY_CXaYgIxQJ1AKN7hq74/view?usp=sharing">
                Curriculum Vitae 
                <img src={downarrow} alt="↓" className="download-button" />
            </Button>
            <div className="background">
                <div className="blur center">
                    <p className="aboutme-intro">
                        Hello there! 👋 Nowadays, I'm a full stack developer but my interest rely in the backend.
                        I'm a vegetarian an enthusiast of the use of linux distros and I'm always in the pursuit of something new to learn. 
                        Team player with great communications skills.
                    </p>
                </div>
            </div>
        </div>
    )
}
