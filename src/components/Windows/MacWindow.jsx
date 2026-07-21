import React from 'react'
import {Rnd} from "react-rnd"
import "./MacWindow.scss"

function MacWindow({children ,windowName,setWindowState,windowState}) {
  


  
  
  return (
    <Rnd
      default={{ 
        
        x: 120, y: 120 }}
      enableResizing={true}
      bounds="parent"
      style={{ zIndex: 5, cursor: 'move' }}
    >
      <div className="window">
        <div className="window-nav">
            <div className="dots">
                <div onClick={()=> setWindowState(state=> ({...state, [windowName]:false}))} className="dot red "></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="window_title">
                <p>./Krishna gupta</p>
            </div>
        </div>

        <div className="window-content">
            {children}
        </div>
      </div>
    </Rnd>
  )
}

export default MacWindow
