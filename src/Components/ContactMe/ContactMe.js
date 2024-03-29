import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './ContactMe.css'

const ContactMe = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dhvapfe', 'template_ykdqbdy', form.current, 'mTstNQPnNog0fGp3I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        
        <section id="ContactMe">
            <div id="Contact">
                <h1 className="ContactTitle">Contact Me</h1>
                <span className="ContactDesc">Please fill out the form below to discuss any work opportuinities</span>
                <form className="ContactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="Email" placeholder="Your Email" name="your_email"/>
                    <textarea name="message" rows={5} placeholder="Your Message" className="msg"></textarea>
                    <button type="submit" className="submitBtn" value='Send'>Submit</button>
                </form>
                <div className="FollowMe">
                    <a href="https://twitter.com/Shivamjaswal5?t=vHPxM2mVTMI2K0Ng7sVDQg&s=09"><i class="fa-brands fa-x-twitter fa-4x icon-3d"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100012580488488&sfnsn=wiwspwa&mibextid=RUbZ1f"><i class="fa-brands fa-facebook-f fa-4x icon-3d"></i></a>
                    <a href="https://www.instagram.com/back_in_real__life?igsh=ZXFydms3dTcwYXVm"><i class="fa-brands fa-instagram fa-4x icon-3d"></i></a>
                    <a href="https://www.linkedin.com/in/shivam-shiva-080208254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin-in fa-4x icon-3d"></i></a>
                </div>
            </div>
        </section>
    )
}

export default ContactMe;