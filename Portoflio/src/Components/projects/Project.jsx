import React from 'react'
import "./project.css"
import IMG1 from '../../assests/project1.png';
import IMG2 from '../../assests/project2.png';
import IMG3 from '../../assests/project3.png';




const portfolioDate = [
  {
    id: 1,
    image: IMG1,
    title: 'portfolio item 1',
    github:'',
    demo: 'https://mahmoudfoaud.github.io/Drive-kktc-/'

  },
  {
    id: 2,
    image: IMG2,
    title: '',
     github:'',
    demo: 'https://ustacik.onrender.com/'

  },

  {
    id: 3,
    image: IMG3,
     title: '',
     github:'',
    demo: 'https://mahmoudfoaud.github.io/cyprus-social/portfolio.html'

  }

  

];

function Projects() {
  return (
    <section className='projects'>
      <div className="top_section">
        <h5>What Skills I Have </h5>
        <h2>My Experience </h2>
      </div>

      <div className="container projects_container">
        {portfolioDate.map(({ id, image, title, githup, demo}) =>(
      <article Key={id} className='portfolio_item'>
        <div className="portfolio_item_img">
          <img src={image} alt="" />
        </div>

        <h3>{title}</h3>
        <div className="portfolio_item_btns">
          <a href={githup} target='_blank' className='btn'>
            Githup
          </a>
          <a href={demo} target='_blank' className='btn btn-primry'>
            Live Demo
          </a>
        </div>
      </article>
))}
      </div>
    </section>
  );
}

export default Projects
