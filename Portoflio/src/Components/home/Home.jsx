import React from 'react'
import './home.css'
import ME from '../../assests/me.png'
import HomeSocials from './HomeSocials'
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
       <HomeSocials/>
      </div>
    
    </div>
  )
}

export default Home
