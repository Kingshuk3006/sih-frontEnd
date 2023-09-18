'use-client';

import BotsonicWidget from '@/components/Chatbot/Chatbot.main';
import { EClinic } from '@/components/Dashboard/e-clinic.main';
import Navbar from '@/components/Header/Navbar.main';
import Model from '@/components/Model/model.main';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-blueBackground">
      <Navbar />
      <BotsonicWidget />
      <EClinic />
    </div>
  );
}
