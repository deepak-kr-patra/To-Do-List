import React from 'react';
import { MdLightMode } from "react-icons/md";
import Dropdown from './Dropdown';


const MenuBar = ({ authUser }) => {

    return (
        <div className='w-full flex items-center justify-between p-2 px-8 border-b-2 bg-whiteee'>
            <div className='flex flex-col items-centeryy justify-center'>
                <h3 className='text-2xl font-bold'>Welcome 👋</h3>
                <p className='text-lg font-bold'>{authUser.username}</p>
            </div>

            <div className='text-3xl font-bold'>
                <h2>Your Tasks</h2>
            </div>

            <div className='flex items-center justify-center gap-8'>
                <Dropdown />
                <MdLightMode className='text-3xl' />
            </div>
        </div>
    )
}

export default MenuBar