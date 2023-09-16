'use-client';

import Benefits from "@/components/Homepage/Benefits/benefits.main";
import Hero from "@/components/Homepage/Hero.main";
import Navbar from "@/components/Homepage/Navbar.main";
import Testimonial from "@/components/Homepage/Testimonial/Testimonial.main";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-blueBackground">
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonial />
      {/* <ContactUs /> */}
    </div>
  )
}