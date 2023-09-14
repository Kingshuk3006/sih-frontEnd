import React from 'react'
import Tabs from './TabSwitch'
export default function Benefits() {
    return (
        <div id="benefits" className="bg-[#15B9FF] w-screen pt-20">
            <section>
                <h1 className="text-3xl font-bold">Sign In</h1>
                <div className=" flex flex-wrap items-center max-w-full m-auto py-12">
                    <div className="md:w-[67%] md:mb-6 lg:w-[50%] mb-12">
                        <img src="/skin.svg" alt="skin" className='sm:pr-8'/>
                    </div>
                    <div className=" w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                      <Tabs />
                    </div>
                </div>
            </section>
        </div>
    )
}
