import React from 'react'
import MacWindow from './MacWindow'
import  './resume.scss'
function Resume() {
  return (
    <MacWindow>
      <div className="resume-window">
        <iframe src="./resume.pdf" frameborder="0"></iframe>
      </div>
    </MacWindow>
  )
}

export default Resume
