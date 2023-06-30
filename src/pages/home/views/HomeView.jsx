import React from 'react'
import {About, Contact, Gallery, Hero2, Hero1, Location, Rooms, Services, SocialMedia, Testimonials, Newsletter} from "../components/homeComponents"

const HomeView = () => {
    return (
        <div>
            <Hero2 />
            <About />
            <Rooms />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
            <Location />
            <SocialMedia />
            <Newsletter />
        </div>
    )
}

export default HomeView
