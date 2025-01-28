import './Resume.css';

const Resume = () => {
  return (
   
    <div className="sec__content-resume">
      <div className="sec_title">
        <h2>Qualification</h2>
      </div>
      <div className="container-1">
        <div className="row qualification-content">
          <div className="col-sm-6">
            {/* Education */}
            <div className="col-xs-12 col-sm-12 ">
              <h3 className="subtitle">
                Education
                <svg className="underlineWidth" viewBox="0 0 66 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g className="underline">
                    <g className="underline-color">
                      <path d="M149,466 C152.87377,466 152.87377,470 156.747541,470 C160.621311,470 160.621311,466 164.493293,466 C168.367064,466 168.367064,470 172.240834,470 C176.112816,470 176.112816,466 179.984798,466 C183.858569,466 183.858569,470 187.730551,470 C191.607898,470 191.607898,466 195.483457,466 C199.362593,466 199.362593,470 203.241728,470 C207.120864,470 207.120864,466 211,466"></path>
                    </g>
                  </g>
                </svg>
              </h3>
              <div className="resume">
                <div className="item">
                  <div className="date">
                    <span>June 2019 - May 2022</span>
                  </div>
                  <div className="content">
                    <h4 className="college-name">Francis Xavier Engineering College</h4>
                    <p>
                      <span >Tirunelveli, Tamilnadu.</span>
                    </p>
                    <p className='college-location'>Bachelor Of Engineering</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Education end */}

            {/* Certificate */}
            <div className="col-xs-12 col-sm-12">
              <br />
              <h3 className="subtitle">
                Certificate
                <svg className="underlineWidth" viewBox="0 0 66 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g className="underline">
                    <g className="underline-color">
                      <path d="M149,466 C152.87377,466 152.87377,470 156.747541,470 C160.621311,470 160.621311,466 164.493293,466 C168.367064,466 168.367064,470 172.240834,470 C176.112816,470 176.112816,466 179.984798,466 C183.858569,466 183.858569,470 187.730551,470 C191.607898,470 191.607898,466 195.483457,466 C199.362593,466 199.362593,470 203.241728,470 C207.120864,470 207.120864,466 211,466"></path>
                    </g>
                  </g>
                </svg>
              </h3>
              <div className="resume">
                <div className="item">
                  <div className="date">
                    <span>February 2023</span>
                  </div>
                  <div className="content">
                    <h4>Full Stack Development - NXT WAVE CCBP 4.O</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Certificate end */}
          </div>

          <div className="col-sm-6">
            {/* Experience */}
            <div className="col-xs-12 col-sm-12 mob-margin-top-30 resume-exprince">
              <h3 className="subtitle">
                Experience
                <svg className="underlineWidth" viewBox="0 0 66 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g className="underline">
                    <g className="underline-color">
                      <path d="M149,466 C152.87377,466 152.87377,470 156.747541,470 C160.621311,470 160.621311,466 164.493293,466 C168.367064,466 168.367064,470 172.240834,470 C176.112816,470 176.112816,466 179.984798,466 C183.858569,466 183.858569,470 187.730551,470 C191.607898,470 191.607898,466 195.483457,466 C199.362593,466 199.362593,470 203.241728,470 C207.120864,470 207.120864,466 211,466"></path>
                    </g>
                  </g>
                </svg>
              </h3>
              <div className="resume">
                <div className="item">
                  <div className="date">
                    <span>May 2023 - Nov 2024</span>
                  </div>
                  <div className="content">
                    <h4>Ezofis</h4>
                    <h5>Web Developer</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="date">
                    <span>Nov 2024 - Till now</span>
                  </div>
                  <div className="content">
                    <h4>Hero Apps</h4>
                    <h5>Web Developer</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* Experience end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

