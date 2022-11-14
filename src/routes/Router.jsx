import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PaginaFeed from '../components/pages/PaginaFeed'
import PaginaPostar from '../components/pages/PaginaPostar'

export default function Router() {
  return (
        <Routes>
            <Route exact path="/" element={<PaginaFeed/>} />
            <Route exact path='feed' element={<PaginaFeed/>}/>
            <Route exact path='postar' element={<PaginaPostar/>}/>
        </Routes>
  )
}
