'use client';
import BotsonicWidget from '@/components/Chatbot/Chatbot.main';
import BotPage from '@/components/Chatbot/Chatbot.openai';
import ChatRoom from '@/components/ChatRoom/ChatRoom.main';
import DoctorDashboard from '@/components/Dashboard/Doctor.dashboard.main';
import PatientDashboard from '@/components/Dashboard/Doctor.dashboard.main';
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
import { useUser } from '../../../context/usercontext';

const User = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const {user} = useUser()
    console.log(user?.role);


    return (
        <>
            <div className="bg-blueBackground pb-6">
                <Navbar />
                {
                    user?.role === "Patient" && <PatientDashboard/>
                }
                {
                    user?.role === "Doctor" && <DoctorDashboard/>

                }
               
            </div>
        </>
    );
};

export default User;
