import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import '../public/styles/styles.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <main id="main">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
