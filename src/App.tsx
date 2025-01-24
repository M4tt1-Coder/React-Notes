/**
 *  - Note taker -
 *
 * Add simple notes to the list of notes. -> create, modify, delete
 *
 * Primary without a backend & database -> notes will be added to the array at runtime.
 */

import { Route, Routes } from "react-router-dom";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";

// TODO - Main page / notes list
// TODO - Notes dashboard
// TODO - Create page

function App() {
  // set the notes list with custom hook

  return (
    <Routes>
      <Route path="/" element={<NoteList />} />
      <Route path="/create" element={<CreateNote />} />
      <Route path="/dashboard/:id" element={<></>} />
    </Routes>
  );
}

export default App;
