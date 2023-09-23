import { InputGroup, InputLeftAddon, Input } from '../../../lib/chakraui';
import React, { useState } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { useAuth } from '../../../context/authContext';
// import { sendOtp } from "@/functions/auth/sendOtp";

const EnterMobileNumber = ({
  setIsOtpPage,
  mobileNumber,
  setMobileNumber
}: any) => {
  const { loginWithPhoneNumber } = useAuth();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl text-blueDeep font-semibold mb-2 ">
        Register or Sign In
      </h1>
      <p className="text-sm font-light text-[#00184485] mb-4">
        An OTP will be sent to your mobile number for verification
      </p>
      <InputGroup marginBottom={'10px'}>
        <div className="p-3">
          <BsTelephone size={20} />
        </div>
        <Input
          type="number"
          backgroundColor={'#FBFAFF'}
          focusBorderColor="#1A75FF"
          placeholder="Enter your Phone Number"
          size={'md'}
          fontSize="base"
          onChange={e => setMobileNumber(e.target.value)}
        />
      </InputGroup>
      <button
        className=" btn-secondary w-full"
        disabled={mobileNumber?.length != 10}
        onClick={() => {
          setIsOtpPage(true);
          loginWithPhoneNumber(mobileNumber);
        }}
      >
        Get Otp
      </button>
      <p className="text-sm font-light text-[#00184485] mb-4">
        <input type="checkbox" className="mr-2" />
        By Sign In/Registration, I agree to the Terms of Service and Privacy
        Policy
      </p>
    </div>
  );
};

export default EnterMobileNumber;
