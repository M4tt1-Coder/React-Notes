import { useState } from "react";
import { Note } from "../utils/types";
import { filterNotesWithSearchString } from "../utils/searchHelper";
import { redirect } from "react-router-dom";

// TODO - Design + Responsibility
// TODO - Add logic

interface Props {
  notes: Note[];
}

/**
 *  Displays all notes that are currently in the list.
 *
 *  Opens the create page.
 *
 *  Deletes all notes from the list.
 *
 * @param param0 - The list of notes.
 * @returns The compiled xlm code for the notes list page.
 */
function NoteList({ notes }: Props) {
  // reactive state declarato
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <button
          className="absolute top-0 left-0 p-3 w-[70px] aspect-square"
          type="button"
        >
          <a href="https://github.com/M4tt1-Coder" className="w-full h-full">
            <svg
              className="h-[40px] w-[40px] text-black transition-all duration-700 hover:rotate-[360deg] hover:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </button>
        <div className="flex flex-col justify-between items-center w-1/2 h-3/4">
          {/* the heading */}
          <div className="w-full h-fit">
            <p className="text-center font-sans text-5xl font-bold transition-all duration-500 hover:tracking-wider hover:-translate-y-1">
              Notizen App
            </p>
          </div>
          {/* buttons + search bar */}
          <div className="w-full flex items-center justify-around">
            {/* create - button */}
            <button
              className="py-2 px-3 text-2xl font-medium ring-2 ring-black rounded-lg transition-all duration-500 hover:text-white hover:bg-black"
              type="button"
            >
              <a href="/create">Create</a>
            </button>
            {/* deleteAllNotes button */}
            <button
              className="py-2 px-3 text-2xl font-medium ring-2 ring-black rounded-lg transition-all duration-500 hover:text-white hover:bg-black"
              type="button"
              onClick={() => {}}
            >
              Delete All
            </button>
            {/* search  */}
            <div className="">
              <input
                type="text"
                className="font-medium p-2 rounded-lg ring-2 ring-black placeholder-slate-300 focus:bg-black focus:text-white transition-all duration-500"
                placeholder="Search ..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setFilteredNotes(
                    filterNotesWithSearchString(notes, searchTerm)
                  );
                }}
              />
            </div>
          </div>
          {/* note list */}
          <div className="flex flex-col items-center justify-center w-full">
            {notes.length === 0 ? (
              // when the notes list is empty, notify the user
              <p className="text-black font-mono font-semibold text-xl">
                No notes have been found
              </p>
            ) : (
              filteredNotes.map((note) => (
                <div className="mb-3 rounded-xl bg-slate-100 ring-2 ring-black w-full p-3 transition-all duration-500 flex justify-between items-center hover:bg-slate-200">
                  {/* title */}
                  <p className="font-sans text-2xl font-medium transtition-all duration-500 hover:-translate-y-1 tracking-wide">
                    {note.title}
                  </p>
                  {/* date */}
                  <p className="font-sans text-gray-500 text-xl">
                    {note.date.toLocaleDateString()}
                  </p>
                  {/* link button to dashboard */}
                  <button type="button" className="" onClick={() => {}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-6 transition-all duration-500 hover:-translate-x-1 hover:size-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteList;
