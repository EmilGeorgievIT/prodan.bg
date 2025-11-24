import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import Logout from './components/logout/Logout';
import PostDetails from './components/postDetails/PostDetails';
import { AuthContextProvider } from './contexts/AuthContext';
import PrivateGuard from './components/common/Guards/PrivateGuard';
import AuthGuard from './components/common/Guards/AuthGuard';
import PostCreate from './components/postCreate/PostCreate';

import '../public/styles/styles.scss';
import PostEdit from './components/postEdit/PostEdit';

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
            <Route path="/post/create" element={<PostCreate />} />
            <Route path="/post/edit/:postId" element={<PostEdit />} />
          </Route>
          <Route path='/post/:postId' element={<PostDetails />} />
        </Routes>
      </main>
      <Footer />
    </AuthContextProvider>
  )
}

export default App
