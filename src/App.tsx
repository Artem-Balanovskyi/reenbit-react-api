import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { CharacterDetailsPage } from './pages/CharacterDetailsPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:characterId' element={<CharacterDetailsPage />} />
        <Route path='*' element={<h2>Page is not found</h2>} />
      </Routes>
    </>
  )
}

export default App
