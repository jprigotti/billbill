import React from 'react'
import hostelImage from "../../../../assets/images/hero/hostel_image_2.jpg";
import "./Hero.css"
import "../../../../utils/generalStyles.css"

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className='mb-1'>Hosteller — amazing hostel for the free spirited traveler</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vero nisi dicta libero error aut itaque sunt, porro odio eveniet.</p>
          <button>Click</button>
        </div>
        <div className="hero_image">
          <img src={hostelImage} alt="" />
        </div>
      </div>

    </section>
  )
}

export default Hero
