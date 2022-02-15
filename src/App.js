import "./App.css";
import Header from "./main/Header";
import Notes from "./main/Note";
import Footer from "./main/Footer";
import notes from "./main/notes";

function createNotes(noteItem){
return(
  <Notes 
  title={noteItem.title}
  content={noteItem.content} 
  />
)
}
function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
