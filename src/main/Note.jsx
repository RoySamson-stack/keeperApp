import React from "react"
import ReactDOM from "react-dom"
import notes from "./notes"

function Notes(props){
function handleClick(){
  props.onDelete(props.id)
}


    return(
      <div className="note">
        <h1 className="note_title">{props.title}</h1>
        <p className="note_content">{props.content}</p>
        <button onClick={handleClick} >DELETE</button>
      </div>
    )
  }

export default Notes 
