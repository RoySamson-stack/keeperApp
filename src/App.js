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
  return (
    <div className="App">
      <Header />
      <CreateArea 
          onAdd={addNote}
      />
    {  notes.map((noteItem)=>{
        return <Notes
        title={noteItem.title}
        content={noteItem.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
