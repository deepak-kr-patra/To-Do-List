import React from 'react';
// import { MdLightMode } from "react-icons/md";
import Dropdown from './Dropdown';
import useAuthUser from '../zustand/useAuthUser';


const MenuBar = () => {

    const { authUser } = useAuthUser();

    return (
        <div className='relative w-full flex items-center justify-between p-2 px-8 border-b-2'>
            <div className='  flex flex-col items-start justify-center'>
                <h3 className='text-2xl font-bold'>Welcome 👋</h3>
                <p className='text-lg font-bold'>{authUser.username}</p>
            </div>

            <div className='absolute left-1/2 translate-x-[-50%] text-3xl font-bold'>
                <h2>Your Tasks</h2>
            </div>

            <div className=' flex items-center justify-center gap-8'>
                {/* <MdLightMode className='text-3xl' /> */}
                <Dropdown />
            </div>
        </div>
    )
}

export default MenuBar