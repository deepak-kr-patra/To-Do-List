import React from 'react'
import useLogout from '../hooks/useLogout';


const LogoutModal = () => {

    const { loading, logout } = useLogout();

    const toggleLogoutModal = () => {
        const logoutModal = document.getElementById('logout-modal-container');

        logoutModal.classList.contains('show-modal-container') ? logoutModal.classList.remove('show-modal-container') : logoutModal.classList.add('show-modal-container');
    };

    return (
        <div className='modal-container' id='logout-modal-container'>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Logout from your account?</h3>
                <div className='flex justify-end mt-6 gap-2'>
                    <button className="btn" onClick={() => toggleLogoutModal()}>Cancel</button>
                    {loading ? (
                        <span className='loading loading-spinner'></span>
                    ) : (
                        <button className="btn bg-[#cb2727] hover:bg-[#a82e2e] text-white" onClick={() => logout()}>Logout</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LogoutModal