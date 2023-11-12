import React from 'react'
import settings from '../Images/settings_minor.svg';
import account from '../Images/addAccount.svg'
import billing from '../Images/billing.svg'
import customize from '../Images/customize.svg'
import launch from '../Images/launch.svg'
import welcome from '../Images/welcome.svg'

export default function Home() {
    return (
        <>


            <div className='font-sans w-[70%] mx-auto my-10 h-screen'>

                <div className="space-y-3">
                    <h1 className='text-2xl text-black font-bold'>Welcome to EcoCart</h1>
                    <p className='text-xl pb-6'>Thank you for joining the fight against Climate Change</p>
                </div>
                <div className='px-2 border border-gray-300 border-b-0 bg-white'>
                    <div className="flex justify-between my-auto py-4">
                        <h1 className='text-xl text-black ps-2 font-semibold'>Start Guide</h1>
                        <p className='text-sm text-gray-400 mr-4 my-auto '>1/5 Steps completed</p>
                    </div>
                </div>
                <div className='border border-gray-300 bg-white'>
                    <div className='grid grid-cols-8'>
                        <div className="col-span-2">
                            <ul className='bg-[#EDEEEF]'>
                                <li className='flex text-[#5c5f62] gap-4 py-6 pl-3 border border-t-0 border-r-0 border-l-0 border-neutral-300  font-bold'><img src={settings} alt="" /> Account Settings</li>
                                <li className='flex text-[#5c5f62] gap-4 py-6 pl-3 border border-t-0 border-r-0 border-l-0 border-neutral-300  font-bold'><img src={account} alt="" />Create Account</li>
                                <li className='flex text-[#5c5f62] gap-4 py-6 pl-3 border border-t-0 border-r-0 border-l-0 border-neutral-300  font-bold'><img src={billing} alt="" />Billing Info</li>
                                <li className='flex text-[#5c5f62] gap-4 py-6 pl-3 border border-t-0 border-r-0 border-l-0 border-neutral-300  font-bold'><img src={customize} alt="" />Customize</li>
                                <li className='flex text-[#5c5f62] gap-4 py-5 pl-3   font-bold'><img src={launch} alt="" />Launch</li>
                            </ul>
                        </div>
                        <div className="col-span-4 p-8 space-y-4">
                            <h2 className='text-lg font-semibold'>
                                Select who will pay for the offsets
                            </h2>
                            <p>First, fill out some basic information about your shop in the Account Settings Tab.</p>
                            <button className='bg-[#008060] text-white font-bold px-4 py-2 rounded-lg'>Update Information</button>
                        </div>
                        <div className="col-span-2 mt-4">
                            <img src={welcome} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
