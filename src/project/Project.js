
import React from 'react';
import './Project.css';
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Project = () => {
  return (
    <div className="col-xs-12 col-sm-12 sec__content-resume">
       <div className="sec_title">
        <h2>Projects</h2>
      </div>
      
      <div >
        <div className="education-content">
          <p className='project-title'> 
            <b>Portal Builder</b>
            <svg className="underlineWidth" viewBox="0 0 66 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g className="underline">
                    <g className="underline-color">
                      <path d="M149,466 C152.87377,466 152.87377,470 156.747541,470 C160.621311,470 160.621311,466 164.493293,466 C168.367064,466 168.367064,470 172.240834,470 C176.112816,470 176.112816,466 179.984798,466 C183.858569,466 183.858569,470 187.730551,470 C191.607898,470 191.607898,466 195.483457,466 C199.362593,466 199.362593,470 203.241728,470 C207.120864,470 207.120864,466 211,466"></path>
                    </g>
                  </g>
                </svg>
          </p>
          <div className="resume project"> 
            <ul>
              <li>
                <b>Language</b>: JavaScript
              </li>
              <li>
                <b>Duration</b>: 2 months
              </li>
              <li>
                <b>Team Members</b>: Solo project
              </li>
              <li>
                Developed an HTML builder allowing users to drag and style HTML elements.
                Implemented features to import and modify single-file HTML and CSS.
              </li>
              <li>
                Enabled non-technical users to create styled HTML pages without coding knowledge.
              </li>
              <li>
                <div className='project-link'>
                  <b>
                    <FaGithub />
                  </b>:  <a href="https://github.com/skanthan39/HTML-Builder" target='_blank'>html builder Git</a>
                </div>
              </li>
              <li>
              <div className='project-link'>
                <b>
                  <TbWorld /></b>: <a href="https://htmlbuilders.netlify.app/" target='_blank'>html builder
                </a>
              </div>
              </li>
            </ul>
          </div>
          
          <p className='project-title'>
            <b>V5 Workflow System</b>
            <svg className="underlineWidth" viewBox="0 0 66 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g className="underline">
                    <g className="underline-color">
                      <path d="M149,466 C152.87377,466 152.87377,470 156.747541,470 C160.621311,470 160.621311,466 164.493293,466 C168.367064,466 168.367064,470 172.240834,470 C176.112816,470 176.112816,466 179.984798,466 C183.858569,466 183.858569,470 187.730551,470 C191.607898,470 191.607898,466 195.483457,466 C199.362593,466 199.362593,470 203.241728,470 C207.120864,470 207.120864,466 211,466"></path>
                    </g>
                  </g>
                </svg>
          </p>
          <div className="resume project"> 
            <ul>
              <li>
                <b>Language:</b> Vue.js
              </li>
              <li>
                <b>Duration:</b> 5 months
              </li>
              <li>
                <b>Team Members:</b> 3
              </li>
              <li>
                Designed a workflow system and form builder with repositories to streamline process management.
              </li>
            </ul>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Project;

