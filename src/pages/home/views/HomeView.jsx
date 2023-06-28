import React from 'react'
import {About, Contact, Gallery, Hero, Hero1, Location, Rooms, Services, SocialMedia, Testimonials} from "../components/homeComponents"

const HomeView = () => {
    return (
        <div>
            <Hero1 />
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
