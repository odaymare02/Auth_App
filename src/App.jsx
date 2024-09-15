import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

export default function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>} />
    <Route path='*' element={<h2>sdaigfjd</h2>}/>
   </Routes>
   </>
  )
}
