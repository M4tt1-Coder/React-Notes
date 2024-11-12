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

// TODO - Main page
// TODO - Notes dashboard
// TODO - Create page / popover
// TODO - Think of a database and backend -> deploy using Docker

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NoteList
            notes={[
              {
                id: "1232341234",
                description: "This is an description",
                title: "This is an title",
                date: new Date(),
              },
              {
                id: "124231423453",
                description: "Full of surprises for further information",
                title: "This is an title",
                date: new Date(),
              },
            ]}
          />
        }
      />
      <Route
        path="/create"
        element={<CreateNote returnCreatedNote={(note) => {}} />}
      />
    </Routes>
  );
}

export default App;
