import React from "react"
import ReactDOM from "react-dom"
import notes from "./notes"

function Notes(props){
    return(
      <div className="note">
        <h1 className="note_title">{props.title}</h1>
        <p className="note_content">{props.content}</p>
        <button>DELETE</button>
      </div>
    )
  }

export default Notes 
