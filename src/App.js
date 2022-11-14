import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pages from './ComponentsComposition/Pages';
import Login from './ComponentsComposition/login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App


