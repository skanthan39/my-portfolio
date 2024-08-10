
import React from 'react';
import './Contact.css';
import { CiMail   } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

const Contact = () => {
  return  (
    <div className="scroll__content contact">
      <div className="sec_title">
        <h2>Contact Me</h2>
      </div>
      <div className="col-xs-12 col-sm-5">
       
        <div className="row">
          <div className="contact-info text-center">
            <div className="row">
              <div className="col-sm-12">
                <br />
                <div className="items">
                <CiMail size={50} />
                  <p>
                    <a href="mailto:skanthan39@gmil.com" id="thecontactemail">
                      skanthan39@gmil.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-sm-12">
                <br />
                <div className="items">
                <LuPhone size={50}/>
                  <p>8778331122</p>
                </div>
              </div>

              <div className="col-sm-12">
                <br />
                <div className="items">
                <CiLocationOn size={50} />
                  <p>
                    250, Viswanatha kovil street, V.M.Chatram., Tirunelveli,
                    Tamilnadu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

