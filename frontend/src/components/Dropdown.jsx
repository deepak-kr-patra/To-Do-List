import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { IoPerson } from 'react-icons/io5'


const Dropdown = () => {

    const toggleModals = (clickedDivId) => {
        const changeUsernameModal = document.getElementById('change-username-modal-container');
        const changePasswordModal = document.getElementById('change-password-modal-container');
        const logoutModal = document.getElementById('logout-modal-container');

        if (clickedDivId === 'change-username-div') {
            changeUsernameModal.classList.add('show-modal-container');
            changePasswordModal.classList.remove('show-modal-container');
            logoutModal.classList.remove('show-modal-container');
        }
        else if (clickedDivId === 'change-password-div') {
            changePasswordModal.classList.add('show-modal-container');
            changeUsernameModal.classList.remove('show-modal-container');
            logoutModal.classList.remove('show-modal-container');
        }
        else if (clickedDivId === 'logout-btn-div') {
            logoutModal.classList.add('show-modal-container');
            changeUsernameModal.classList.remove('show-modal-container');
            changePasswordModal.classList.remove('show-modal-container');
        }
    };

    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button">
                <IoPerson className='profile-btn' />
            </div>

            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <div id='change-username-div' className='p-2 max-md:p-1.5 max-sm:p-1 rounded-lg hover:bg-slate-200 cursor-pointer' onClick={() => toggleModals('change-username-div')}>Change Username</div>
                <div id='change-password-div' className='p-2 max-md:p-1.5 max-sm:p-1 rounded-lg hover:bg-slate-200 cursor-pointer' onClick={() => toggleModals('change-password-div')}>Change Password</div>

                <div className="divider m-0"></div>

                <div className='flex items-center justify-end px-2 py-1 max-sm:p-0'>
                    <div id='logout-btn-div' className='flex items-center justify-center gap-2 max-sm:gap-1 p-1 rounded-lg hover:bg-slate-200 cursor-pointer' onClick={() => toggleModals('logout-btn-div')}>
                        <span className='logout-text'>Logout</span><BiLogOut className='logout-icon' />
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Dropdown