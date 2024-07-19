import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import useAuthUser from './zustand/useAuthUser';


function App() {

  const { authUser } = useAuthUser();

  return (
    <div className='wrapper h-full w-full flex items-center justify-center'>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
            <Route path="login/*" element={authUser ? <Navigate to={"/"} /> : <Login />} />
            <Route path="signup/*" element={authUser ? <Navigate to={"/"} /> : <Signup />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </>
    </div>
  )
}

export default App
