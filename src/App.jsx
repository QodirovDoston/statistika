import React from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Portal from './pages/Portal'
import Personal from './components/Personal'
import { Route, Routes } from 'react-router'
import Contact from './pages/Contact'
import ERI from './pages/ERI'
import Sorov from './pages/Sorov'
import ChatBot from './components/ChatBot'
import Carousel from './components/Carousel'

const App = () => {
  return (
    <>
      <Header />
      <div className='headBG'>
      <main className='flex flex-col md:flex-row space-y-5 md:space-y-0 container space-x-5 py-10 '>
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Portal />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/eri' element={<ERI />} />
            <Route path='/questions' element={<Sorov />} />
          </Routes>
        </div>
        <Personal />
        <ChatBot/>
      </main>
      </div>
      <div className="bg-text_gray flex flex-col items-center">
      <Carousel />
    </div>
      <Footer />
    </>
  )
}

export default App