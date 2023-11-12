import React from 'react'

export default function Integrations() {
    return (
        <div className='mx-auto h-screen'>
            <div className='font-sans w-[100%] mt-6'>
                <div className='font-sans '>

                    <div className="space-y-2 mt-3 mb-16" >
                        <h1 className='text-2xl text-black font-bold pt-4'>EcoCart Integrations</h1>
                        <p className='text-xl'>One-click integrations with other marketing tools you love. </p>
                    </div >
                    <div className="grid grid-cols-4 gap-3 my-8">
                        <div className="col-span-4 text-sm font-bold">E-Commerce</div>
                        <div className="col-span-2 bg-white rounded-lg border border-gray-200 pb-4">
                            <div className='p-4 flex'>
                                <div className='bg-gray-400 w-12 h-12 '></div>
                                <span className='my-auto mx-4 font-bold'>Shopify</span> <br />
                            </div>
                            <span className='p-4'>Carbon neutral order for your customers at no cost to you.</span>
                        </div>
                        <div className="col-span-2 bg-white rounded-lg border border-gray-200 pb-4">
                            <div className='p-4 flex'>
                                <div className='bg-gray-400 w-12 h-12 '></div>
                                <span className='my-auto mx-4 font-bold'>App.io</span> <br />
                            </div>
                            <span className='p-4'>Email marketing service for customers,</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 border border-gray-200">
                        <div className='col-span-5 flex justify-between my-auto bg-white py-3 px-4 border border-b-gray-200 border-t-0 border-r-0 border-l-0'><div className=" font-bold  ">Vote for our next integration</div>
                            <div> <a href="/" className=' text-blue-500 font-semibold'>Suggest an integration</a></div></div>

                        <div className="col-span-1 bg-white">
                            <div className='p-4 flex'>
                                <div className='bg-gray-400 w-12 h-12 '></div>
                                <span className='my-auto mx-4 font-bold'>App <br /> <a href="/" className='font-normal text-blue-500'>Vote</a></span>

                            </div>
                        </div>
                        <div className="col-span-1 bg-white">
                            <div className='p-4 flex'>
                                <div className='bg-gray-400 w-12 h-12 '></div>
                                <span className='my-auto mx-4 font-bold'>App <br /> <a href="/" className='font-normal text-blue-500'>Vote</a></span>

                            </div>
                        </div>
                        <div className="col-span-1 bg-white">
                            <div className='p-4 flex'>
                                <div className='bg-gray-400 w-12 h-12 '></div>
                                <span className='my-auto mx-4 font-bold'>App <br /> <a href="/" className='font-normal text-blue-500'>Vote</a></span>

                            </div>
                        </div>
                        <div className="col-span-1 bg-white">
                            <div className='p-4 flex'>
                                <div className='bg-gray-400 w-12 h-12 '></div>
                                <span className='my-auto mx-4 font-bold'>App <br /> <a href="/" className='font-normal text-blue-500'>Vote</a></span>

                            </div>
                        </div>
                        <div className="col-span-1 bg-white">
                        </div>

                    </div>

                </div >
                <div className='py-3 px-4 rounded-full border border-gray-300 w-fit mx-auto mt-40 mb-10'>
                    <p> <span className='text-sm bg-green-800 text-white rounded-full px-2 me-1 mt-10 '>i</span> Learn more about <a className=' text-blue-500 underline' href="/">integrations</a>.</p>
                </div>
            </div >

        </div>
    )
}
