import React from 'react'
import NavBar from './components/Navbar'
import GameBoard from './components/GameBoard'
import './App.css'

export default function App() {
  return (
    <div className='app'>
      <NavBar/>
      <GameBoard/>
    </div>
  )
}