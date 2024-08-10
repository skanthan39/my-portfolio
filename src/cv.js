import React, { useState, useEffect } from 'react';
import './cv.css';
import Resume from './resume/Resume.js'
import resumePDF from './CV.pdf'
import AboutMe from './about/About.js'
import { TiHomeOutline } from "react-icons/ti";
import Contact from './contact/Contact.js'
import Project from './project/Project.js'
import { LuArrowBigRight } from "react-icons/lu";
// import FullResume from "./Resume.js";




const Cv = () => {
    const texts = [" Kanthan s ", " full Stack web developer"];
    const typingSpeed = 100;
    const delay = 2000;

    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isHome, updateisHome] = useState({home:true,about:false,resume:false,project:false,contact:false});
    

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
    const setUpdateisHome = () => {
      let a = {home:false,about:true,resume:false,project:false,contact:false,fullResume:false}
      updateisHome(a);
    };
    const gotoHome= () =>{
      let a = {home:true,about:false,resume:false,project:false,contact:false,fullResume:false}
      updateisHome(a);
    }
    const openResume = () =>{
      let a = {home:false,about:false,resume:true,project:false,contact:false,fullResume:false}
      updateisHome(a);
    }
    const openProject = () =>{
      let a = {home:false,about:false,resume:false,project:true,contact:false,fullResume:false}
      updateisHome(a);
    }
    const openContact = () =>{
      let a = {home:false,about:false,resume:false,project:false,contact:true,fullResume:false}
      updateisHome(a);
    }
    const openCV = () =>{
      let a = {home:false,about:false,resume:false,project:false,contact:false,fullResume:true}
      updateisHome(a);
    }

    return (
        <div className="overAllContainer">
           { isHome.home && <div className="container name-container">
                <div className="overlay">
                    <div className='col content'>
                        <p className="typing">I'm<span className="typing-text">{displayedText}</span></p>
                        <div className='Under-score'></div>
                        <div className='row'>
                            <a href={resumePDF} download="Kanthan-CV.pdf">
                                <button className="download-cv-btn">Download CV</button>
                            </a>
                            <button className='contct-me-btn' onClick={openContact}>Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>}


          {/* intro content   */}

          <div className={`intro-content ${ !isHome.home ? 'move-to-left' : ''} `}>
            <div className={`menu ${ !isHome.home ? "menu-not-home" : ''  }`}> 
              <div className="linesContent">
                <span className="home-line-top-left"></span>
                <span className="home-line-top-right"></span>
                <span className="home-line-bottom-left"></span>
                <span className="home-line-bottom-right"></span>
            </div>
              <ul id="menu" className={`list-unstyled menu_list ${ !isHome.home ? "menu-list-not-home" : ''  }`}>
                <li className="menu-item">
                  <span>
                    <a href="#about" onClick={setUpdateisHome}>
                      about
                    </a>
                  </span>
                </li>
                <li className="menu-item">
                  <span>
                    <a href="#resume" onClick={openResume}>
                      resume
                    </a>
                  </span>
                </li>
                <li className="menu-item" >
                  <span>
                    <a href="#other" onClick={openProject}>
                      Projects
                    </a>
                  </span>
                </li>
                <li className="menu-item">
                  <span>
                    <a href="#contact" onClick={openContact}>
                      contact
                    </a>
                  </span>
                </li>

               {!isHome.home && (
                <>
                  <li>
                   <div className="icon-container">
                      <TiHomeOutline
                        className="icon-large"
                        size={25}
                        onClick={gotoHome}
                      />
                      <span className="tooltip-text">Go to Home</span>
                    </div>
                </li>
                 {/* <li>
                 <div className="icon-container">
                     <LuArrowBigRight
                       className="icon-large"
                       size={25}
                       onClick={openCV}
                     />
                     <span className="tooltip-text">View Full CV</span>
                   </div>
               </li>   */}
                </>
               )
               
                             
                }

              </ul>
            </div>
          </div>

          {/* About page */}
          
          {isHome.about && !isHome.home && <AboutMe />}
          {isHome.resume && !isHome.home && <Resume/>}
          {isHome.project && !isHome.home && <Project/>}
          {isHome.contact && !isHome.home && <Contact/>}
          {/* {isHome.fullResume && !isHome.home && <FullResume/>} */}

        </div>
    );
};

export default Cv;
