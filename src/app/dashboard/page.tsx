'use client';
import BotsonicWidget from '@/components/Chatbot/Chatbot.main';
import BotPage from '@/components/Chatbot/Chatbot.openai';
import ChatRoom from '@/components/ChatRoom/ChatRoom.main';
import { EClinic } from '@/components/Dashboard/e-clinic.main';
import Navbar from '@/components/Header/Navbar.main';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import {
  AiFillThunderbolt,
  AiOutlineThunderbolt,
  AiOutlineUser
} from 'react-icons/ai';
import { BsRobot } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const User = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentTab = searchParams.get('currentTab');

  return (
    <>
      <div className="bg-blueBackground pb-6">
        <Navbar />
        <div className="mx-8 py-6 min-h-[90vh] flex justify-between gap-8">
          <div className="max-w-[20vw] space-y-4 w-full">
            <section
              className="cursor-pointer hover:scale-105 duration-200 flex bg-white justify-start items-center space-x-2 text-blueDeep px-4 py-2.5 shadow-lg font-medium rounded-lg"
              onClick={() => router.push('/dashboard?currentTab=E-Clinic')}
            >
              {currentTab !== 'E-Clinic' ? (
                <AiOutlineThunderbolt size={'36px'} color="#1A75FF" />
              ) : (
                <AiFillThunderbolt size={'36px'} color="#1A75FF" />
              )}
              <span>E Clinic</span>
            </section>
            <section
              className="cursor-pointer hover:scale-105 duration-200 flex bg-white justify-start items-center space-x-2 text-blueDeep px-4 py-2.5 shadow-lg font-medium rounded-lg"
              onClick={() => router.push('/dashboard?currentTab=ChatBot')}
            >
              {currentTab !== 'ChatBot' ? (
                <BsRobot size={'36px'} color="#1A75FF" />
              ) : (
                <BsRobot size={'36px'} color="#1A75FF" />
              )}
              <span>ChatBot</span>
            </section>
          </div>
          <div className="bg-white shadow-lg rounded-md w-full py-4 px-6">
            {currentTab === 'E-Clinic' && <EClinic />}
            {currentTab === 'ChatBot' && <BotsonicWidget />}
            {currentTab === 'ChatRoom' && <ChatRoom />}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
