"use client"
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Benefits from '@/components/Benefits'
import Testimonial from '@/components/Testimonial'
import ContactUs from '@/components/ContactUs'
import { useUser } from '@/context/userContext'

export default function Home() {
  const {user} = useUser()

  console.log(user);
  

  return (
    <div className="flex min-h-screen flex-col bg-blueBackground">
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonial />
      <ContactUs />
    </div>
  )
}