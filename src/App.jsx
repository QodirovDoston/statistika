import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Route, Routes } from 'react-router'
import LandingPage from './LandingPage'
import PersonalAcount from './components/PersonalAcount'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<PersonalAcount />} /> 
      </Routes>
    </>
  )
}

export default App

