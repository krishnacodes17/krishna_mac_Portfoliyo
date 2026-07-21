import React from "react";
import "./dock.scss"

function Dock({setWindowState}) {
  return (
    <footer className="dock">

      <div onClick={()=> setWindowState((state)=> ({...state , github:true}))} className="icon github">
        <img src="../../public/doc-icons/github.svg" alt="" />
      </div>

      <div onClick={()=> setWindowState((state)=> ({...state , note:true}))} className="icon note">
        <img src="../../public/doc-icons/note.svg" alt="" />
      </div>

      <div onClick={()=> setWindowState((state)=> ({...state , resume:true}))} className="icon pdf">
        <img src="../../public/doc-icons/pdf.svg" alt="" />
      </div>

      <div onClick={()=> setWindowState((state)=> ({...state , calender:true}))} className="icon calender">
        <img onClick={()=>window.open("https://calendar.google.com/","_blank")} src="../../public/doc-icons/calender.svg" alt="" />
      </div>

      <div onClick={()=> setWindowState((state)=> ({...state , spotify:true}))} className="icon spotify">
        <img src="../../public/doc-icons/spotify.svg" alt="" />
      </div>

      <div onClick={()=> setWindowState((state)=> ({...state , mail:true}))} className="icon mail">
        <img onClick={()=>window.open("mailto:krishnacodes17@gmail.com","_blank")} src="../../public/doc-icons/mail.svg" alt="" />
      </div>
      
      <div onClick={()=> setWindowState((state)=> ({...state , link:true}))} className="icon link">
        <img onClick={()=>window.open("https://www.linkedin.com/in/krishna-codes17","_blank")} src="../../public/doc-icons/link.svg" alt="" />
      </div>

      <div onClick={()=> setWindowState((state)=> ({...state , cli:true}))} className="icon cli">
        <img src="../../public/doc-icons/cli.svg" alt="" />
      </div>


    </footer>
  );
}

export default Dock;
