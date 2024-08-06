import './Resume.css';

const Resume = () => {
  return (
    <div className="scroll__content">
      <div className="sec_title">
        <h2>About Me</h2>
      </div>
      <div className="sec__content">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-4">
              <ul className="list-user-details">
                <li>
                  <span className="list-title">Gender:</span>
                  <span className="value">Male</span>
                </li>
                <li>
                  <span className="list-title">Date of birth:</span>
                  <span className="value">04/07/1998</span>
                </li>
                <li>
                  <span className="list-title">Phone:</span>
                  <span className="value">8778331122</span>
                </li>
                <li>
                  <span className="list-title">Email:</span>
                  <span className="value">skanthan39@gmil.com</span>
                </li>
                <li>
                  <span className="list-title">Address:</span>
                  <span className="value">250, Viswanatha kovil street, V.M.Chatram.</span>
                </li>
                <li>
                  <span className="list-title">Nationality:</span>
                  <span className="value">India</span>
                </li>
              </ul>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/kanthan-s/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-xs-6 col-sm-8">
              <div className="heading">
                <h2>Kanthan S <br />Full Stack Web Developer</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h3 className="subtitle margin-top-55">My Skills
                {/* <svg viewBox="0 0 66 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g className="Web">
                    <g className="Header">
                      <path d="M149,466 C152.87377,466 152.87377,470 156.747541,470 C160.621311,470 160.621311,466 164.493293,466 C168.367064,466 168.367064,470 172.240834,470 C176.112816,470 176.112816,466 179.984798,466 C183.858569,466 183.858569,470 187.730551,470 C191.607898,470 191.607898,466 195.483457,466 C199.362593,466 199.362593,470 203.241728,470 C207.120864,470 207.120864,466 211,466"></path>
                    </g>
                  </g>
                </svg> */}
              </h3>
              <div className="skills">
                <div className="skill">
                  <span>React JS</span>
                  <span className="percentage">80%</span>
                  <div className="progress_bg">
                    <div className="progress_bar" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>Node JS</span>
                  <span className="percentage">80%</span>
                  <div className="progress_bg">
                    <div className="progress_bar" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>JavaScript</span>
                  <span className="percentage">80%</span>
                  <div className="progress_bg">
                    <div className="progress_bar" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>My SQL</span>
                  <span className="percentage">80%</span>
                  <div className="progress_bg">
                    <div className="progress_bar" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>Express JS</span>
                  <span className="percentage">60%</span>
                  <div className="progress_bg">
                    <div className="progress_bar" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>Python</span>
                  <span className="percentage">60%</span>
                  <div className="progress_bg">
                    <div className="progress_bar" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="skill">
                  <span>VUE JS</span>
                  <span className="percentage">80%</span>
                  <div className="progress_bg">
                    <div className="progress_bar" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6"></div>
            <div className="col-xs-12 col-sm-6"></div>
            <div className="col-xs-12 col-sm-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

