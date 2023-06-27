import React from 'react'
import Hero from "../components/hero/Hero"
import About from '../components/about/About'
import Rooms from "../components/rooms/Rooms"
import Services from "../components/services/Services"
import Gallery from "../components/gallery/Gallery"
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact"
import Location from "../components/location/Location"
import SocialMedia from "../components/socialMedia/SocialMedia"



const HomeView = () => {
    return (
        <div>
            <Hero />
            <About />
            <Rooms />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
            <Location />
            <SocialMedia />
        </div>
    )
}

export default HomeView
