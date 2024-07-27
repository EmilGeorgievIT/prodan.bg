import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Login from './components/Login/login';

import '../public/styles/styles.scss';

function App() {
  return (
    <>
      <Header/>
      <main id="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
