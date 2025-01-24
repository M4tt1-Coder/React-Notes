import { useState } from "react";
import { Note } from "../utils/types";
import { v4 } from "uuid";
import GoToMainPage from "./GoToMainPage";
import { notesManager } from "../utils/noteHelper";

// interface CreateNoteProps {
//   createNote(note: Note): void;
// }

/**
 *  The page for creating a new note.
 *
 *  Returns the created note data to the parent.
 *
 * @param param0 - data-sharing method to pass note data to the parent
 * @returns
 */
function CreateNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <GoToMainPage />
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="h-4/5 w-1/2 grid grid-cols-1 grid-rows-4">
          {/* A heading */}
          <div className="col-span-1 row-span-1 flex items-center justify-center">
            <p className="font-sans text-5xl font-bold">Create A Note</p>
          </div>
          {/* data form */}
          <form
            className="col-span-1 row-span-3 w-full h-full grid grid-cols-1 grid-rows-5"
            action={() => {
              const createdNote: Note = {
                id: v4(),
                title: title,
                description: description,
                date: new Date(),
              };
              // push the created note to the database
              async function pushNote() {
                await notesManager().createNote(createdNote);
              }
              pushNote();
            }}
          >
            {/* note title  */}
            <div className="row-span-1 col-span-1 flex flex-col items-start justify-center">
              <label
                className="mb-2 font-sans text-2xl font-medium"
                htmlFor="note-title"
              >
                Title
              </label>
              <input
                className="w-full rounded-lg ring-2 ring-black p-[0.5rem] focus:bg-black focus:text-white transition-all duration-500"
                id="note-title"
                placeholder="Your next todo ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
              ></input>
            </div>
            {/*  note description */}
            <div className="row-span-3 col-span-1 w-full h-full flex flex-col items-start justify-center">
              <label
                className="mb-2 w-full font-sans text-2xl font-medium"
                htmlFor="note-description"
              >
                Description
              </label>
              <textarea
                className="p-2 w-full h-4/5 rounded-lg ring-2 ring-black focus:bg-black focus:text-white transition-all duration-500"
                onChange={(e) => setDescription(e.target.value)}
                id="note-description"
                placeholder="Describe your todo ..."
              ></textarea>
            </div>
            {/* the create button */}
            <div className="row-span-1 col-span-1 flex items-center justify-center">
              <button
                className="bg-black p-3 text-white font-semibold text-3xl rounded-xl hover:text-black hover:bg-white hover:ring-4 hover:ring-black transition-all duration-700"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
