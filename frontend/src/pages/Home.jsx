import React from 'react';

import useAuthUser from '../zustand/useAuthUser';

import MenuBar from '../components/MenuBar';
import Tasks from '../components/tasks/Tasks';
import LogoutModal from '../components/LogoutModal';
import UpdateUsernameModal from '../components/UpdateUsernameModal';
import UpdatePasswordModal from '../components/UpdatePasswordModal';


const Home = () => {

  const { authUser } = useAuthUser();

  return (
    <div className='flex flex-col w-full h-full'>
      <MenuBar authUser={authUser} />
      <Tasks />

      {/* hidden modals */}
      <LogoutModal />
      <UpdateUsernameModal />
      <UpdatePasswordModal />
    </div>
  )
}

export default Home


{/* <p>{authUser._id}</p>
      <p>{authUser.username}</p>
      {loading ? (
        <span className='loading loading-spinner'></span>
      ) : (
        <div>
          {tasks.map((task, key) => <div key={key}>{task.title}</div>)}
        </div>
      )}
      <LogoutButton /> */}