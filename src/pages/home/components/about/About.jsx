import React from 'react'
import "./About.css"
import image from "../../../../assets/images/hostel_image_1.jpg"
import { content } from "./content"

const About = () => {
  return (
    <div className='about'>
      <div className="main-container">
        <div className="about-container">
          <div className="content">
            <h1 className='mb-1'>Por que elegir Bill&Bill</h1>
            {content.map((content, index) => {
              return (<p key={index} className="mb-1"> {content.paragraph} </p>)
            })}
          </div>
          <div className="image">
            <img src={image} alt="Imagen" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default About
