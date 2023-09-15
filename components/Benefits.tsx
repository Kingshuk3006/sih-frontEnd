import React from 'react'
import TabComponent from './CustomTabs'
export default function Benefits() {
    return (
        <div id="benefits" className="bg-[#15B9FF] w-screen py-24">
            <section>
                <h1 className="text-3xl pl-8">Benefits</h1>
                <div className=" flex flex-col-reverse gap-6 lg:flex-row flex-wrap items-start max-w-full m-auto py-12">
                    <div className="md:w-[67%] md:mb-6 lg:w-[50%] mb-12">
                        <img src="/skin.svg" alt="skin" className='sm:pr-8'/>
                    </div>
                    <div className=" w-full m-auto lg:m-0 md:w-[67%] lg:w-[40%] lg:ml-20">
                      <TabComponent />
                    </div>
                </div>
            </section>
        </div>
    )
}
