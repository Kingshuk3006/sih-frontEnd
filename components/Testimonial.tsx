import React from 'react'
import Marquee from 'react-fast-marquee'
import Card from './TestimonyCard'

export default function Testimonial() {
    return (
        <div id="testimonial" className="bg-[#76D6FF] h-screen w-screen pt-20">
            <h1 className="text-3xl pl-8">Testimonials</h1>
            <Marquee pauseOnHover speed={100}>
                <Card />
                <Card />
                <Card />
            </Marquee>
            <Marquee pauseOnHover speed={100} direction="right">
                <Card />
                <Card />
                <Card />
            </Marquee>
        </div>
    )
}
