import { Input } from '@/app/lib/chakraui'
import React from 'react'

export default function ContactUs() {
  return (
    <div id='contact' className='bg-[#15B9FF] screen w-screen pt-20'>
        
             
                  <h3 className="text-center  text-[#221389] text-4xl pl-8" > Contact Us</h3>
              
                  <h2 className="text-center text-[#FFFFFF]  text-1xl pl-8" >Ready to get started,or have a question
                         for our team?Reach out and we will respond 
                        as soon as possible.
                  </h2>
                  <div className="md:w-[17%] md:mb-6 lg:w-[20%] mb-12">
                        <img src="/login.png" text-center alt="skin" className='sm:pr-8'/>
                    </div>
            
           <div className='w-2/4'>
                  <p className="text-lg mb-2 text-center">Name*</p>
                  <div className="text-center">
                  <Input
                    className="text-center"
                    borderColor={'gray.500'}
                   // onChange={(e: any) => setName(e.target.value)}
                    //value={name}
                    backgroundColor={'#FBFAFF'}
                    focusBorderColor="purple.500"
                    placeholder="Enter Your Name"
                  ></Input>
                  </div>
            </div>
            <div className='w-2/4'>
                  <p className="text-lg mb-2 text-center">Email*</p>
                  <div className="center">

                  <Input
                    className="text-center"
                    borderColor={'gray.500'}
                   // onChange={(e: any) => setName(e.target.value)}
                    //value={name}
                    backgroundColor={'#FBFAFF'}
                    focusBorderColor="purple.500"
                    placeholder="Enter Your Email-id"
                  ></Input>
                  </div>
             </div>
            <div className='w-2/4'>
                  <p className="text-lg mb-2 text-center">Phone no*</p>
                  <Input
                    className="text-center"
                    borderColor={'gray.500'}
                   // onChange={(e: any) => setName(e.target.value)}
                    //value={name}
                    backgroundColor={'#FBFAFF'}
                    focusBorderColor="purple.500"
                    placeholder="Enter Your Phone number"
                  ></Input>
                </div>
            <div className='w-2/4'>
                  <p className="text-lg mb-2 text-center">Queries*</p>
                  <Input
                    className="text-center"
                    borderColor={'gray.500'}
                   // onChange={(e: any) => setName(e.target.value)}
                    //value={name}
                    backgroundColor={'#FBFAFF'}
                    focusBorderColor="purple.500"
                    placeholder="Enter your queries"
                  ></Input>
                </div>
            
            
                
                  <button
                    borderColor={'gray.500'}
                   // onChange={(e: any) => setName(e.target.value)}
                    //value={name}
                    backgroundColor={'#C726FF'}
                    focusBorderColor="blue.500"
                    placeholder="Schedule Consult"
                  ></button>
              
              
            
    </div>
  )
}
