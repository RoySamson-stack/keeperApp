import "./App.css";
import Header from "./main/Header";
import Notes from "./main/Note";
import Footer from "./main/Footer";
import notes from "./main/notes";

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((noteItem) => <Notes title={noteItem.title} content={noteItem.content} />
      )}
      <Footer />
    </div>
  );
}

export default App;
