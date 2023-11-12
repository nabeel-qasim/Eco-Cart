import React from 'react'
import Home from '../Images/home_major.svg';
import Orders from '../Images/orders_major.svg'
import Products from '../Images/products_major.svg'
import Apps from '../Images/apps_major.svg'
import settings from '../Images/settings_minor.svg';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <>
            <div className='flex flex-col justify-between border border-l-0 border-t-0 border-b-0 border-slate-200 pe-10'>
                <div className="">
                    <ul className='mx-6 py-6 bg-[#f6f6f7]'>
                        <Link to="/Home"> <li className='flex text-[#5c5f62] gap-4 font-bold'>
                            <img src={Home} alt="" /> Home</li></Link>
                        <li className='flex text-[#5c5f62] gap-4 my-4 font-bold'><img src={Orders} alt="" />Instructions</li>
                        <Link to="/Billing"> <li className='flex text-[#5c5f62] gap-4 my-4 font-bold'><img src={Products} alt="" />Billing</li></Link>
                        <Link to="/Integrations"><li className='flex text-[#5c5f62] gap-4 font-bold'><img src={Apps} alt="" />Integrations</li></Link>
                    </ul>
                </div>
                <div> <li className='mx-6 py-6 flex text-[#5c5f62] gap-4 font-bold'>

                    <img src={settings} alt="" /> Settings
                </li></div>
            </div >
        </>
    )
}
