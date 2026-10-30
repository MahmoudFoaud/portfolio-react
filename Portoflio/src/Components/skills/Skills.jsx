import React from 'react'
import './skills.css'
import CSS from "../../assests/CSS.png"
import HTML from "../../assests/HTML.png"
import JS from "../../assests/JS.png"
import ReactJS from "../../assests/ReactJS.png"
import NodeJS from "../../assests/NodeJS.jpg"
import MongoDB from "../../assests/MongoDB.png"
const SkillsData = [
  {
    id: 1,
    image: CSS,
    title: "CSS",
    desc: "User Interface Design."
  },
  {
    id: 2,
    image: HTML,
    title: "HTML",
    dess: "User Interface Design."
  },
  {
    id: 3,
    image: JS,
    title: "JavaScript",
    desc: "User Interface Design."
  },
  {
    id: 4,
    image: ReactJS,
    title: "ReactJS",
    desc: "User Interface Design."
  },
  {
    id: 5,
    image: NodeJS,
    title: "NodeJS",
    desc: "User Interface Design."
  },
  {
    id: 6,
    image: MongoDB,
    title: "MongoDB",
    desc: "User Interface Design."
  }
]



function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5> what Skills I Have </h5>
        <h2> My Skills </h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({id, image, title, desc}) => (
          
            <articale className="card_skills" key={id}>
              <div className="icon">
                <img src={image} alt={title} />
              </div>

              <div className="content">
                <h4>{title}</h4>
                <p className="text-light">{desc}</p>
              </div>
            </articale>
          
        ))}
      </div>
    </section>
  )
}

export default Skills
