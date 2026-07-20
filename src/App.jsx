import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume'


function App() {
  return (
      <main>
        <Dock />
        <Nav />
        <Github />
        <Note />
        <Resume/>

      </main>
  )
}

export default App
