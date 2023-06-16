import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./style.css"

import NotFound from '../Views/NotFound'
import Home from '../Views/Home'

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  )
}

