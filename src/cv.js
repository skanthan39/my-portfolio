import React, { useState, useEffect } from 'react';
import './cv.css';
import Resume from './resume/Resume.js';
import resumePDF from './CV.pdf';
import AboutMe from './about/About.js';
import { TiHomeOutline } from "react-icons/ti";
import Contact from './contact/Contact.js';
import Project from './project/Project.js';
import { LuArrowBigRight } from "react-icons/lu";
import FullResume from "./Resume.js";
import { useMediaQuery } from '@mui/material';
import sklogo from './images/sklogo.png'

const Cv = () => {
    const texts = [" Kanthan S ", " Full Stack Developer"];
    const typingSpeed = 100;
    const delay = 2000;

    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isHome, updateIsHome] = useState({ home: true, about: false, resume: false, project: false, contact: false, fullResume: false });
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const [showScreen, updateShowScreen] = useState(!isSmallScreen);

    // Typing effect
    useEffect(() => {
        if (charIndex < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + texts[textIndex].charAt(charIndex));
                setCharIndex(prev => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0);
                setTextIndex(prev => (prev + 1) % texts.length);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, textIndex, texts]);

    // Generalized function to update section
    const updateSection = (section) => {
        const sections = { home: false, about: false, resume: false, project: false, contact: false, fullResume: false };
        updateIsHome({ ...sections, [section]: true });
        updateShowScreen(false);
    };

    const toggleMenu = () => {
        updateShowScreen(!showScreen);
    };

    return (
        <div className="overAllContainer">
            {/* Home Section */}
            {isHome.home && (
                <div className="container name-container">
                    <div className="overlay-1">
                        <div className='col content'>
                            <p className="typing">I'm<span className="typing-text">{displayedText}</span></p>
                            <div className='Under-score'></div>
                            <div className='row'>
                                <a href={resumePDF} download="Kanthan-CV.pdf">
                                    <button className="download-cv-btn">Download CV</button>
                                </a>
                                <button className='contact-me-btn' onClick={() => updateSection('contact')}>Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Intro content */}
            <div className={`intro-content ${!isHome.home ? 'move-to-left' : ''} ${isHome.home || isHome.fullResume ? '' : 'navbar-border'}`}>
                <div className={`menu ${!isHome.home ? "menu-not-home" : ''}`}>
                    {!isSmallScreen ? (
                        <div className="linesContent">
                            <span className="home-line-top-left"></span>
                            <span className="home-line-top-right"></span>
                            <span className="home-line-bottom-left"></span>
                            <span className="home-line-bottom-right"></span>
                        </div>
                    ) : (
                        <div className="hamburger-icon" onClick={toggleMenu}>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className={`line ${isHome.home || isHome.fullResume ?  "" : "dark" }`}></div>
                            ))}
                            
                        </div>
                    )}

                    {(!isSmallScreen || showScreen) && (
                        <ul id="menu" className={`list-unstyled menu_list ${!isHome.home ? "menu-list-not-home" : ''}`}>
                            <li className="menu-item">
                                <span><a href="#about" className={` ${isHome.about ? "selectedItem-home" : 'noclass'}`} onClick={() => updateSection('about')}>About</a></span>
                            </li>
                            <li className="menu-item">
                                <span><a href="#resume" className={` ${isHome.resume ? "selectedItem-home" : ''}`} onClick={() => updateSection('resume')}>Qualifications</a></span>
                            </li>
                            <li className="menu-item">
                                <span><a href="#other" className={` ${isHome.project ? "selectedItem-home" : ''}`} onClick={() => updateSection('project')}>Projects</a></span>
                            </li>
                            <li className="menu-item">
                                <span><a href="#contact" className={` ${isHome.contact ? "selectedItem-home" : ''}`} onClick={() => updateSection('contact')}>Contact</a></span>
                            </li>

                            {!isHome.home && (
                                <li>
                                    <div className="icon-container">
                                        {!isSmallScreen ? (
                                            <>
                                                <TiHomeOutline className="icon-large" size={25} onClick={() => updateSection('home')} />
                                                <span className="tooltip-text">Go to Home</span>
                                            </>
                                        ) : (
                                            <span><a href="#contact" onClick={() => updateSection('home')}>Home</a></span>
                                        )}
                                    </div>
                                </li>
                            )}
                            <li>
                                <div className="icon-container">
                                    {!isSmallScreen ? (
                                        <>
                                            <LuArrowBigRight className="icon-large" size={25} onClick={() => updateSection('fullResume')} />
                                            <span className="tooltip-text">View CV</span>
                                        </>
                                    ) : (
                                        <span><a href="#contact" className={` ${isHome.fullResume ? "selectedItem-home" : ''}`} onClick={() => updateSection('fullResume')}>View CV</a></span>
                                    )}
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Other Sections */}
            {isHome.about && !isHome.home && <AboutMe />}
            {isHome.resume && !isHome.home && <Resume />}
            {isHome.project && !isHome.home && <Project />}
            {isHome.contact && !isHome.home && <Contact />}
            {isHome.fullResume && !isHome.home && <FullResume />}
        </div>
    );
};

export default Cv;
