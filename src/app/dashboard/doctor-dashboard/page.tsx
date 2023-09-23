'use client';
import DoctorDashboard from '@/components/Dashboard/Doctor.dashboard.main';
import Navbar from '@/components/Header/Navbar.main';
import React, { useEffect } from 'react';

const DoctorDashboardPage = () => {

    return (
        <>
            <div className="bg-blueBackground pb-6">
                <Navbar />
                <DoctorDashboard />
            </div>
        </>
    );
};

export default DoctorDashboardPage;
