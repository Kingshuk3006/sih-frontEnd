/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
    return (
        <div id="home" className="relative -mt-20 h-screen">
            <img src="/hero.png" className="absolute inset-0 object-cover w-full h-full" />
            <section className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3">
                <h1 className="text-white text-6xl leading-[5rem] font-holtwood">DERMACURE.AI</h1>
                <h2 className="text-white text-lg font-bold">
                    YOUR ONE STOP AI ASSISTANT FOR ALL DERMATOLOGICAL PROBLEMS
                </h2>
            </section>
        </div>
    )
}

export default Hero
