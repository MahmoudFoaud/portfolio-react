import React from 'react'
import './about.css'
import IMageME from '../../assests/IMageME.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5> Get To Know </h5>
        <h2> About Me </h2>
    </div>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me_imge">
          <img src={IMageME} alt="About Image" />
          
        </div>
      </div>
      
      <div className="about_content">
        <div className="about_cards">

        <div className="abut_card">
          <FaAward className='about_icon'/>
          <h5> Experience </h5>
          <small> 3+ Years Working </small>
        </div>
          


        <div className="abut_card">
          <FiUsers className='about_icon'/>
          <h5> Clients </h5>
          <small> 20+ Happy Clients </small>
</div>
          <div className="abut_card">
          <VscFolderLibrary className='about_icon'/>
          <h5> Projects </h5>
          <small> 25+ Completed Projects </small>
        </div>
</div>
          <p>
          I am a full-stack web developer with a passion for creating dynamic and responsive web applications. With experience in both front-end and back-end development, I have a strong understanding of the entire web development process. I am skilled in HTML, CSS, JavaScript, and various frameworks and libraries such as React and Node.js. I am constantly learning and staying up-to-date with the latest technologies to deliver high-quality solutions. I am a team player who enjoys collaborating with others to bring ideas to life. Let's work together to create something amazing!
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk </a>
          
      
        </div>
          

          

        </div>

        
      
      
    

    </section>
  )
}

export default About



