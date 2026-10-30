import React from 'react'
import ME from '../../assests/me.png'
import HomeSocials from './HomeSocials'
import './home.css'
function Home() {
  return (
    <div className='home' >
      <div className= "container home__container">
        <h4> Hello I'm </h4>
        <h1> Mahmoud Foaud</h1>
        <h4 className='text-light'> full Stack Developer</h4>
      
      <div className="btns">
        <a href="#" className='btn'> Download CV</a>
        <a href="#" className='btn btn-primary'> Let's Talk</a>
      </div>
      
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      
      <a href="#about" className='scroll_down'> Scroll Down </a>
       <HomeSocials />
      </div>
    
    </div>
  )
}

export default Home
