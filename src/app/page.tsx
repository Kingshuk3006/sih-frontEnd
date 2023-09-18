'use-client';

// import BotsonicWidget from '@/components/Chatbot/Chatbot.main';
import Navbar from '@/components/Header/Navbar.main';
import Benefits from '@/components/Homepage/Benefits/benefits.main';
import ContactUs from '@/components/Homepage/ContactUs/contact.main';
import Hero from '@/components/Homepage/Hero.main';
import Testimonial from '@/components/Homepage/Testimonial/Testimonial.main';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-blueBackground">
      <Navbar />
      {/* <BotsonicWidget /> */}
      <Hero />
      <Benefits />
      <Testimonial />
      <ContactUs />
    </div>
  );
}
