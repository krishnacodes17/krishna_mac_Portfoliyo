import React from 'react'
import MacWindow from './MacWindow'
import  './resume.scss'
function Resume({windowName,setWindowState,windowState}) {
  return (
    <MacWindow windowName={windowName}  setWindowState={setWindowState} windowState={windowState} >
      <div className="resume-window">
        <iframe src="/resume.pdf" title="Resume" frameBorder="0"></iframe>
      </div>
    </MacWindow>
  )
}

export default Resume
