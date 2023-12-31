'use client';
import Navbar from '@/components/Header/Navbar.main';
import React, { useEffect, useState } from 'react';
import EnterMobileNumber from '@/components/Auth/mobileNumber';
import VerifyOtp from '@/components/Auth/verifyOtp';
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  getAuth
} from '@firebase/auth';

const Login = () => {
  const [isOtpPage, setIsOtpPage] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>();
  const [verificationCode, setVerificationCode] = useState('');

  return (
    <div className="min-h-screen bg-[#76D6FF]">
      <Navbar />
      <div className=" flex justify-center items-center h-[90vh]">
        <div className="bg-white max-w-[70vw] shadow-xl p-6 rounded-3xl grid grid-cols-2 justify-items-stretch place-items-center gap-6">
          <img
            src="/login.png"
            alt="login image"
            className=" bg-blueSecondary rounded-xl"
          />
          {isOtpPage ? (
            <VerifyOtp
              mobileNumber={mobileNumber}
              verificationCode={verificationCode}
              setVerificationCode={setVerificationCode}
            />
          ) : (
            <EnterMobileNumber
              setIsOtpPage={setIsOtpPage}
              mobileNumber={mobileNumber}
              setMobileNumber={setMobileNumber}
            />
          )}
          <div id="recaptcha-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
