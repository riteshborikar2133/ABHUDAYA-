import { useState } from 'react'
<<<<<<< HEAD
import Home from './pages/StudentLogin/StudentLogin'
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home/Home'
>>>>>>> 0b99d680475d2f7995c2745336279a4ad354d91b

function App() {

  return (
    <>
<<<<<<< HEAD
      <Home />
=======
      <Routes>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
>>>>>>> 0b99d680475d2f7995c2745336279a4ad354d91b
    </>
  )
}

export default App
