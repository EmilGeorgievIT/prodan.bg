import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Profile from './components/Profile/profile';
import PostDetails from './components/PostDetails/postDetails';

import '../public/styles/styles.scss';

function App() {
  return (
    <>
      <Header/>
      <main id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/post/:id' element={<PostDetails />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
