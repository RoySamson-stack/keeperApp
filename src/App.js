import "./App.css";
import {useState} from "react"
import Header from "./main/Header";
import Notes from "./main/Note";
import Footer from "./main/Footer";
import CreateArea from "./main/CreateArea";


function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes(prevNotes => {
     return [...prevNotes, newNote]
    })
  }

function deleteNote(id){
 setNotes(prevNotes =>{

   return prevNotes.filter((noteItem, index)=>{
    return index !== id;
   })
 })
}


  return (
    <div className="App">
      <Header />
      <CreateArea 
          onAdd={addNote}
      />
    {  notes.map((noteItem,index)=>{
        return <Notes
        id={index}
        key={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
