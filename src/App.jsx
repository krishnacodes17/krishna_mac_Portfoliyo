import React, { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'
import Cli from './components/Windows/Cli'



function App() {

  const [windowState,setWindowState] = useState({
    github:false,
    pdf:false,
    note:false,
    resume:false,
    calender:false,
    mail:false,
    link:false,
    spotify:false,
    cli:false,
  })


  
  return (
      <main>
        <Dock setWindowState={setWindowState} windowState={windowState} />
        <Nav />
        {windowState.github && <Github windowName="github"  setWindowState={setWindowState} windowState={windowState} />}
        {windowState.note && <Note windowName="note"  setWindowState={setWindowState} windowState={windowState}/>}
        {windowState.resume && <Resume windowName="resume"  setWindowState={setWindowState} windowState={windowState}/>}
        {windowState.spotify && <Spotify windowName="spotify"  setWindowState={setWindowState} windowState={windowState}/>}
        {windowState.cli && <Cli windowName="cli"  setWindowState={setWindowState} windowState={windowState}/>}

{/* <Resume /> */}
      </main>
  )
}

export default App
