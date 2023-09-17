'use-client';

import Benefits from '@/components/Homepage/Benefits/benefits.main';
import Hero from '@/components/Homepage/Hero.main';
import Navbar from '@/components/Homepage/Navbar.main';
import ContactUs from '@/components/Homepage/ContactUs/contact.main';
import Testimonial from '@/components/Homepage/Testimonial/Testimonial.main';
import BotsonicWidget from '@/components/Homepage/Chatbot.main';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-blueBackground">
      <Navbar />
      <BotsonicWidget />
      <Hero />
      <Benefits />
      <Testimonial />
      <ContactUs />
    </div>
  );
}
