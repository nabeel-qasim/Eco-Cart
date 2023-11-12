import React from 'react'
import logo from '../Images/ecoCartLogo.svg';
import down from '../Images/chevron-down_minor.svg';
import { IconSearch } from '@tabler/icons-react';

function Navbar() {
    return (
        <div className='px-6 pt-3 pb-3  border border-l-0 border-r-0  border-t-0 border-slate-200 ' >
            <div className=' justify-between grid grid-cols-3 gap-4'>
                <div className='my-auto align-middle'>
                    <img className='' src={logo} alt="logo error" />
                </div>
                <div className='flex bg-[#E4E5E7] border border-gray-300 rounded-md'>
                    <i className='ml-2 my-auto'> <IconSearch color='gray' size={20} /></i>
                    <input type="text" class="w-full p-2 text-sm text-gray-900   bg-[#E4E5E7] " placeholder={"Search"}
                    />
                </div>
                <div className='ml-auto my-auto flex justify-around'>
                    <div className='bg-gray-500 rounded-full w-8 h-8 mr-4 '>
                        <img src="" alt="" /></div>                    <span className='my-auto'>Xquenda Andreev</span>
                    <img className='ms-2' src={down} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
