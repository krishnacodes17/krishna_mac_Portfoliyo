import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import "./note.scss"


function Note() {

    const [markdownText ,setMarkdownText] = useState(null)

    useEffect(()=>{
        fetch("./note.txt")
        .then(res=>res.text())
        .then(text => setMarkdownText(text))
    },[])


  return (
    <MacWindow >
        <div className="note-window">
        {markdownText ? <SyntaxHighlighter style={atelierDuneDark} language='javascript'>{markdownText}</SyntaxHighlighter> : <p>Loading....</p>}
        </div>
    </MacWindow>
  )
}

export default Note
