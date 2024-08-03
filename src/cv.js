import React, { useState, useEffect } from 'react';
import './cv.css';
import resume from './CV.pdf'
import AboutMe from './About.js'

const Cv = () => {
    const texts = [" Kanthan s ", " full Stack web developer"];
    const typingSpeed = 100;
    const delay = 2000;

    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isHome, updateisHome] = useState(false)

    useEffect(() => {
        if (charIndex < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + texts[textIndex].charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText('');
                setCharIndex(0);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, textIndex, texts]);

    return (
        <div className="overAllContainer">
           { isHome && <div className="container name-container">
                <div className="overlay">
                    <div className='col content'>
                        <p className="typing">I'm<span className="typing-text">{displayedText}</span></p>
                        <div className='Under-score'></div>
                        <div className='row'>
                            <a href={resume} download="Kanthan-CV.pdf">
                                <button className="download-cv-btn">Download CV</button>
                            </a>
                            <button className='contct-me-btn'>Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>}


          {/* intro content   */}

          <div className={`intro-content ${ !isHome ? 'move-to-left' : ''} `}>
            <div className="menu"> 
              <div className="linesContent">
                <span className="home-line-top-left"></span>
                <span className="home-line-top-right"></span>
                <span className="home-line-bottom-left"></span>
                <span className="home-line-bottom-right"></span>
            </div>
              <ul id="menu" className="list-unstyled menu_list">
                
                {/* <li className="menu-item">
                  <span>
                    <a href="#home" className="hide" data-hover="home">
                      home
                    </a>
                  </span>
                </li> */}
                <li className="menu-item">
                  <span>
                    <a href="#about" data-hover="about">
                      about
                    </a>
                  </span>
                </li>
                <li className="menu-item">
                  <span>
                    <a href="#resume" data-hover="resume">
                      resume
                    </a>
                  </span>
                </li>
                <li className="menu-item">
                  <span>
                    <a href="#other" data-hover="others">
                      Projects
                    </a>
                  </span>
                </li>
                <li className="menu-item">
                  <span>
                    <a href="#contact" data-hover="contact">
                      contact
                    </a>
                  </span>
                </li>

                <li>
                  <span className="home-item">
                    <a href="#home" data-hover="">
                      <svg
                        viewBox="0 0 64 64"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          id="arrow-right-2"
                          d="M37.333 10.667q1.125 0 1.896 0.771l18.667 18.667q0.771 0.771 0.771 1.896t-0.771 1.896l-18.667 18.667q-0.771 0.771-1.896 0.771-1.146 0-1.906-0.76t-0.76-1.906q0-1.125 0.771-1.896l14.125-14.104h-41.563q-1.104 0-1.885-0.781t-0.781-1.885 0.781-1.885 1.885-0.781h41.563l-14.125-14.104q-0.771-0.771-0.771-1.896 0-1.146 0.76-1.906t1.906-0.76z"
                        ></path>
                      </svg>
                    </a>
                  </span>
                </li>

              </ul>
            </div>
          </div>

          {/* About page */}
          
          {!isHome && <AboutMe />}

        </div>
    );
};

export default Cv;
