'use client';
import BotsonicWidget from '@/components/Chatbot/Chatbot.main';
import BotPage from '@/components/Chatbot/Chatbot.openai';
import ChatRoom from '@/components/ChatRoom/ChatRoom.main';
import { EClinic } from '@/components/Dashboard/e-clinic.main';
import PatientDashboard from '@/components/Dashboard/Patient.dashboard.main';
import Navbar from '@/components/Header/Navbar.main';
import React, { useEffect } from 'react';


const PatientDashboardPage = () => {

    return (
        <>
            <div className="bg-blueBackground pb-6">
                <Navbar />
                <PatientDashboard />
            </div>
        </>
    );
};

export default PatientDashboardPage;
