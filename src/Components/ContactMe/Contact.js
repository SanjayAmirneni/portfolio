import React, { useState } from "react";
import './Contact.css'
import { IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = 'sanjayamirneni@gmail.com';
    var contactMessage = data.contactmessage;
  }

  const submitForm = () => {

    window.open(
      `mailto:sanjayamirneni@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section id="contact" className="contact__container">
        <div className="form">
      <div className="row section-head">
        <div className="two columns header-col text-white">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={submitForm}>
            <fieldset className="fieldset">
              <div className="display_row">
                <label htmlFor="contactName" className="text-white">
                  Name&nbsp;&nbsp;&nbsp;&nbsp;<span className="required">    </span>
                </label>
                <input
                className="textarea"
                  type="text"
                  defaultValue=""
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="display_row">
                <label htmlFor="contactEmail" className="text-white">
                  Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="required"></span>
                </label>
                <input
                className="textarea"
                  type="text"
                  defaultValue=""
                  value={email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="display_row">
                <label htmlFor="contactSubject" className="text-white">Subject&nbsp;&nbsp;</label>
                <input
                className="textarea"
                  type="text"
                  defaultValue=""
                  value={subject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="display_row">
                <label htmlFor="contactMessage" className="text-white">
                  Message <span className="required"></span>
                </label>
                <textarea
                  className="textarea"
                  cols="50"
                  rows="15"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button className="btn btn-light text-center" onClick={submitForm} type="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          </div>
          </div>
          </div>

          {/* <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>
         */}


        <div className="address text-white">
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h1>Address</h1>
            <h4 className="grey margin_0">
              Sanjay Amirneni
              <br />
              sanjayamirneni@gmail.com
              </h4>
              <p className="grey margin_0">
              <br />
              5611 W 134th Ter #1714 <br />
              Leewood, Kansas 66209
              <br />
              <span>+1 9139448600</span>
            </p>
          </div>
          <a href="https://www.linkedin.com/in/sanjay-amirneni-3ba611140/" target="blank">
          <IconButton color="primary" >
          <LinkedInIcon className="size"></LinkedInIcon>
          </IconButton >
          </a>
          <a href="https://github.com/SanjayAmirneni" target="blank">
          <IconButton>
          <GitHubIcon className="white size" />
          </IconButton>
          </a>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
