import React, { useState } from 'react';
import './Contact.css';
import phone from "../images/customer-service.gif";
import location from "../images/location.gif";
import email from "../images/dove.gif";
import thanksForContactUS from '../images/thanks-for-contact.jpg'


const Contact = () => {
  // Corrected state initialization as an object
  const [formArray, updateFormArray] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); 
  const [isContact,setContact] = useState(false);

  // Function to handle form submission
  const sendDetailsToMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Define the payload from the form state
    const payload = {
      name: formArray.name,
      contactNumber: formArray.contactNumber,
      email: formArray.email,
      message: formArray.message,
    };
  
    try {
      const response = await fetch('https://send-mail-project.vercel.app/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const data = await response.json();
        // alert('Message sent successfully!');
        setContact(true);
        console.log('Response:', data);
        // You can reset the form or handle a success state here
      } else {
        const error = await response.text();
        console.log('Failed to send message: ' + error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      console.log('An error occurred. Please try again.');
    }finally{
      setLoading(false);
    }
  };
  

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormArray((prevFormArray) => ({
      ...prevFormArray,
      [name]: value, // Dynamically update the relevant field
    }));
  };

  return (
    <div className="scroll__content contact">
      <div className="sec_title">
        <h2>Contact Me</h2>
      </div>
      <div className="col-xs-12 col-sm-5">
        <div className="row">
          <div className="contact-info text-center">
            <div>
            {!isContact ? (<>
              { loading && (<div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div> ) }
              <div className={`${loading ? 'contact-disable':''} form-container `}>
                <h4>Contact Us</h4>
                <form onSubmit={sendDetailsToMail}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formArray.name}
                      onInput={handleInputChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formArray.email}
                      onInput={handleInputChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="contactNumber"
                      value={formArray.contactNumber}
                      onInput={handleInputChange}
                      placeholder="contact Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formArray.message}
                      onInput={handleInputChange}
                      placeholder="Message"
                      required
                    />
                  </div>
                  <button type="submit" disabled={loading} className="btn-submit">Submit Now</button>
                </form>
              </div>       </>) :  <img src={thanksForContactUS} alt="Thanks for contact uS" className="thanks-for-contact-img"/> }

              <div className="col">
                <div className="contact-details">
                  <div className="gif-container">
                    <img src={location} className="contactGifs" alt="locationGif" />
                    <div className="contact-info">
                      <div>
                        <p>kanthan s,</p>
                        <p>Tirunelveli-627011,</p>
                        <p>INDIA.</p>
                      </div>
                    </div>
                  </div>

                  <div className="gif-container">
                    <img src={phone} className="contactGifs" alt="phoneGif" />
                    <div className="contact-info">
                      <p>+91-8778331122</p>
                    </div>
                  </div>

                  <div className="gif-container">
                    <img src={email} className="contactGifs" alt="emailGif" />
                    <div className="contact-info">
                      <p>skanthan39@gmail.com</p>
                    </div>
                  </div>
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
