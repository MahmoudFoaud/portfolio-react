import React, { useRef } from 'react';
import './contact.css'
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import { RiMastodonFill } from "react-icons/ri";


import emailjs from '@emailjs/browser';


const ContactData =[
  {
    id : 1,
    icon: <MdEmail />,
    title: "Email",
    info: "mfoad9259@gmail.com",
    link:"mailto:test@gmail.com",

  },
  {
    id : 2,
    icon: <RiMastodonFill />,
    title: "massenger",
    info: "https://m.me/Mahmoud Foaud Zaki",
    link:"",

  },
  {
   id : 3,
    icon:  <BsWhatsapp />,
    title: "whatsApp",
    info: "05338772924",
    link:"https://api.whatsapp.com/send?phone=05338772924", 
  }
]
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4erntt8', 'template_xdy5yi9', form.current,'SbXFwyCC5PffdWgyu',
      )
     e.target.reset()
  };


  return (
    <section className='contact' id='contact'>
      <div className="top_section">
        <h5>Get In Touch  </h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
            {ContactData.map(({id, icon, title, info, link}) => (
              <artical key={id} className='contact_option'>
                {icon}
                <h4>{title}</h4>
                <h5>{info}</h5>
                <a href={link} target='_blank'>Send Massage</a>
              </artical>
            ))}
        </div>

        <form ref={form} onSubmit={sendEmail} action="">
          <input type='text' placeholder='Full Name' name='name' />
          <input type="email" placeholder='Your Email' name='email' />
          <textarea rows={10} name='message' id='' placeholder='Enter Your Massege'></textarea>
          <button className='btn btn-primary'>Send Massage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
