import React from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Portal from './pages/Portal'
import { Route, Routes } from 'react-router'
import Contact from './pages/Contact'
import ERI from './pages/ERI'
import Sorov from './pages/Sorov'
import ChatBot from './components/ChatBot'

const App = () => {
  return (
    <>
      <Header />
      <div className='headBG'>
      <main className='flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-5 '>
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Portal />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/eri' element={<ERI />} />
            <Route path='/questions' element={<Sorov />} />
          </Routes>
        </div>
        <ChatBot/>
      </main>
      </div>
      <Footer />
    </>
  )
}

export default App