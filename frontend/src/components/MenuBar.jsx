import React from 'react';
import Dropdown from './Dropdown';
import useAuthUser from '../zustand/useAuthUser';
import useScreenWidth from '../zustand/useScreenwidth';


const MenuBar = () => {

    const { authUser } = useAuthUser();
    const {screenWidth} = useScreenWidth();

    const headerVisibility = screenWidth < 450 ? "hidden" : "";

    return (
        <div className='relative w-full flex items-center justify-between p-2 px-8 max-sm:px-4 border-b-2'>
            <div className='flex flex-col items-start justify-center'>
                <h3 className='font-bold welcome-heading'>Welcome 👋</h3>
                <p className='font-bold username-text'>{authUser.username}</p>
            </div>

            <div className={`absolute left-1/2 translate-x-[-50%] ${headerVisibility}`}>
                <h2 className='font-bold center-heading'>Your Tasks</h2>
            </div>

            <div className='flex items-center justify-center'>
                <Dropdown />
            </div>
        </div>
    )
}

export default MenuBar



{/* <div className='w-full flex flex-col border-b-2'>
            <div className='w-full flex items-center justify-between p-2 px-8'>
                <div className='flex flex-col items-start justify-center'>
                    <h3 className='font-bold welcome-heading'>Welcome 👋</h3>
                    <p className='font-bold username-text'>{authUser.username}</p>
                </div>
                <div className='flex items-center justify-center gap-8'>
                    <Dropdown />
                </div>
            </div>

            <div className='w-full flex items-center justify-center max-sm:hiddenmm'>
                <h2 className='font-bold center-heading'>Your Tasks</h2>
            </div>
        </div> */}