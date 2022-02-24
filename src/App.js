import "./App.css";
import Header from "./main/Header";
import Notes from "./main/Note";
import Footer from "./main/Footer";
import notes from "./main/notes";
import CreateArea from "./main/CreateArea";


function App() {
  function addNote(note){
  }
  return (
    <div className="App">
      <Header />
      <CreateArea 
          onAdd={addNote}
      />
       <Notes key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
