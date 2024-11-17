import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Outlet, Route, Routes, useLocation } from 'react-router'
import PersonalAcount from './components/PersonalAcount'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Portal from './pages/Portal'
import Contact from './pages/Contact'
import ERI from './pages/ERI'
import Sorov from './pages/Sorov'
import ChatBot from './components/ChatBot'




const App = () => {
  const location = useLocation()  // Hozirgi URL manzilini olish
  const isDashboardPage = location.pathname === '/dashboard'
  return (
    <>
      {!isDashboardPage && <Header />} 
      <div className='headBG'>
        <main className='flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-5 '>
          <div className='flex-grow'>
            <Routes>
              <Route path='/' element={<Portal />} />
              <Route path='eri' element={<ERI />} />
              <Route path='contact' element={<Contact />} />
              <Route path='questions' element={<Sorov />} />
              <Route path="/dashboard" element={<PersonalAcount />} />
            </Routes>
          </div>
          <ChatBot />
        </main>
      </div>
      <Footer />
      <Outlet/>
    </>
  )
}

export default App

