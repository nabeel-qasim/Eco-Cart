import React from 'react'
import graph from '../Images/graph.svg';

export default function Billing() {
    return (
        <div className='bg-[#f6f6f7] h-fit'>
            <div className='font-sans mx-auto'>
                <div className='font-sans grid grid-cols-4'>

                    <div className="col-span-3 ml-auto me-10 pe-10">

                        <div className="grid grid-cols-3 gap-3 my-8">
                            <div className="col-span-3 grid grid-cols-3 space-y-5 gap-4">
                                <div className="col-span-3">
                                    <h1 className='text-2xl text-black font-bold my-4'>EcoCart Integrations</h1>
                                    <p className='text-xl'>One-click integrations with other marketing tools you love. </p>
                                </div>

                                <div className="col-span-1 bg-white rounded-lg border border-gray-200 pb-20 pt-2">
                                    <div className='p-4 mx-4'>
                                        <span className='font-bold text-[#00924A] mb-4'>Last Week</span>
                                        <p className='mt-3 text-lg'> <strong>0.0</strong> Tonnes of CO2 offset</p>
                                        <p> <strong>0.0</strong> Equivalent trees p</p>
                                        <p> <strong>0.0</strong> Transactions p</p>
                                    </div>

                                </div>

                                <div className="col-span-1 bg-white rounded-lg border border-gray-200 pb-20 pt-2">
                                    <div className='p-4 mx-4'>
                                        <span className='font-bold text-[#00924A] mb-4'>Last month</span>
                                        <p className='mt-3'> <strong>0.0</strong> Tonnes of CO2 offset</p>
                                        <p> <strong>0.0</strong> Equivalent trees p</p>
                                        <p> <strong>0.0</strong> Transactions p</p>
                                    </div>

                                </div>
                                <div className="col-span-1 bg-white rounded-lg border border-gray-200 pb-20 pt-2">
                                    <div className='p-4 mx-4'>
                                        <span className='font-bold text-[#00924A] mb-4'>Last 12 months</span>
                                        <p className='mt-3'> <strong>0.0</strong> Tonnes of CO2 offset</p>
                                        <p> <strong>0.0</strong> Equivalent trees p</p>
                                        <p> <strong>0.0</strong> Transactions p</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-span-3 max-w-full space-y-8" >
                                <h1 className='mt-4'><strong>Total tonnes of c02 offset</strong></h1>
                                <img className='w-full max-w-full' src={graph} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="col-span-1">
                        <div className="my-0 ms-10">
                            <div className="border border-t-0 border-r-0 ps-4 pt-2 pb-6">
                                <h1><strong>CUSTOMERS EARNING</strong></h1>
                                <p>There are no customers at this time.</p>
                                <a className='text-blue-500 underline' href="#">View all earning activity</a>
                            </div>
                            <div className="border border-t-0 border-r-0 ps-4 pt-2 pb-6">
                                <h1><strong>CUSTOMERS REDEEMING</strong></h1>
                                <p>There are no point redemptions at this time.</p>
                                <a className='text-blue-500 underline' href="#">View all redeeming activity</a>
                            </div>
                            <div className="border border-t-0 border-b-0 border-r-0 ps-4 pt-2 pb-6">
                                <h1><strong>REFERALS COMPLETED</strong></h1>
                                <p>There were no referals completed at this time.</p>
                                <a className='text-blue-500 underline' href="#">View all referral activity</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}
