import React from 'react';

import { IoGrid, IoPerson } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
// import ThemeButton from './ThemeButton';

import useLogout from '../hooks/useLogout';


const MenuBar = ({ authUser }) => {

    const { loading, logout } = useLogout();

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
                {loading ? (
                    <span className='loading loading-spinner'></span>
                ) : (
                    <BiLogOut className='text-3xl cursor-pointer' onClick={() => logout()} />
                )}
                {/* <IoGrid className='text-3xl' /> */}
                <IoPerson className='text-3xl' />
                <MdLightMode className='text-3xl' />
                {/* <ThemeButton /> */}
            </div>
        </div>
    )
}

export default MenuBar