import React from 'react';
import useLogout from '../hooks/useLogout';


const LogoutButton = () => {

    const { loading, logout } = useLogout();

    return (
        <button onClick={() => logout()} className='btn btn-block btn-sm auth-button' disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span> : "Logout"}
        </button>
    )
}

export default LogoutButton