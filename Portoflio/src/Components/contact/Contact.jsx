import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import { RiMastodonFill } from "react-icons/ri";





const ContactData =[
  {
    id : 1,
    icon: <MdEmail />,
    title: "Email",
    info: "Radatech@gmail.com",
    link:"",

  },
  {
    id : 2,
    icon: <RiMastodonFill />,
    title: "Email",
    info: "Radatech@gmail.com",
    link:"",

  },
  {
   id : 3,
    icon:  <BsWhatsapp />,
    title: "Email",
    info: "Radatech@gmail.com",
    link:"", 
  }
]
function Contact() {
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

        <form action="">
          <input type='text' placeholder='Full Name' name='name' />
          <input type="email" placeholder='Your Email' name='email' />
          <textarea name='' id=''></textarea>
          <button className='btn btn-primary'>Send Massage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
