import React,{useEffect} from "react"
import { useForm, ValidationError } from '@formspree/react';
import {motion } from "framer-motion";

const ContactMe = () => {
  useEffect(() => {
    document.title = 'Rustgar Nisar | Contact';
  }, []);

  const [state, handleSubmit] = useForm("xgejgdqq");
  if (state.succeeded) {
      return (
      <div className="mini-container">
      <p>Thanks for contacting me! I will respond back in within 24 hours.</p>
       <a href="/contact" className="go-back">Go Back</a>
       <footer className="mini">
          <p> Made by Rustgar Nisar 👨🏻‍💻</p>
        </footer>
      </div>
     );
  }
return(
    <>
        <motion.div
            initial = {{opacity: 0}} 
            animate={{opacity:1}} 
            exit={{opacity:0}}
            >
        <div className="contactintro">
          <div className="contactleft">
            <h1>Contact Me</h1>
            <p className="exper-desc">If you have any questions or just want to chat, you can reach me on almost any social media platform. I usually respond within 24 hours, so don't hesitate to send me a message. I look forward to connecting with you!</p>
            <div className="sm">
                  <ul>
                    <li><a href="https://github.com/Rustgar"><i className = "github" class="fa-brands fa fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/rustgar-nisar-2474491aa"><i className="linkedin" class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="mailto:rust3530@yahoo.com"><i className="twitter" class="fas fa-envelope"></i></a></li>
                    </ul>
                </div>         
          </div>
          <div className="contactright">
          <>
  <svg
    id="Layer_1"
    className="test"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1625.05 814.99"
  >
    <title>mail</title>
    <ellipse
      cx="812.53"
      cy="711.14"
      rx="812.53"
      ry="103.85"
      style={{ fill: "#d2d2d1" }}
    />
    <g>
      <rect
        x="177.69"
        y={0}
        width="1269.67"
        height="697.4"
        rx="54.32"
        ry="54.32"
        style={{ fill: "#38266b" }}
      />
      <path
        d="m177.69,54.34c0-30,24.32-54.32,54.32-54.32L1393.04,0c30,0,54.32,24.32,54.32,54.32-192.73,118.18-385.47,236.36-578.2,354.54-29.15,17.87-65.8,18.11-95.17.61C575.22,291.1,376.45,172.72,177.69,54.34Z"
        style={{ fill: "#4a2c7b" }}
      />
    </g>
  </svg>
</>
          </div>
        </div>


        <div className="contactform">
        <form onSubmit={handleSubmit}>
              <h3>Shoot Me a Message</h3>
              <input type = "text" id="name" name="Name" placeholder="Name" htmlFor="name" required></input>
              <input type = "email" id="email" name="Email" placeholder="Email" label htmlFor="email" required></input>
              <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
              <input type = "text" id="phone" name="Phone Number" placeholder="Phone Number" htmlFor="phone"></input>
              <textarea id="message" name="Message" rows ="4" placeholder="Type your message in here" htmlFor="message" required></textarea>
              <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
              <button type = "submit" disabled={state.submitting} value = "Send">Send</button>
            </form>
          </div>
        <footer>
          <p> Made by Rustgar Nisar 👨🏻‍💻</p>
        </footer>
      </motion.div>
    </>
    )
}

export default ContactMe;
