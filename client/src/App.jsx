import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Profile from './components/Profile/profile';
import Logout from './components/Logout/logout';
import PostDetails from './components/PostDetails/postDetails';
import { AuthContextProvider } from './contexts/AuthContext';
import PrivateGuard from './components/common/PrivateGuard';
import AuthGuard from './components/common/AuthGuard';

import '../public/styles/styles.scss';


function App() {
  return (
    <AuthContextProvider>
      <Header />
      <main id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<AuthGuard />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<PrivateGuard/>}>
            <Route path='/profile' element={<Profile />} />  
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path='/post/:postId' element={<PostDetails />} />
        </Routes>
      </main>
      <Footer />
    </AuthContextProvider>
  )
}

export default App
