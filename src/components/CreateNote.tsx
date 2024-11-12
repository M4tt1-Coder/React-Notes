import { useState } from "react";
import { Note } from "../utils/types";

interface CreateNoteProps {
  returnCreatedNote(createdNote: Note): void;
}

/**
 *  The page for creating a new note.
 *
 *  Returns the created note data to the parent.
 *
 * @param param0 - data-sharing method to pass note data to the parent
 * @returns
 */
function CreateNote({ returnCreatedNote }: CreateNoteProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="h-4/5 w-1/2 grid grid-cols-1 grid-rows-4">
          {/* A heading */}
          <div className="row-span-1 flex items-center justify-center">
            <p className="font-sans text-5xl font-bold">Create A Note</p>
          </div>
          {/* data form */}
          <form
            className="w-full h-full grid grid-cols-1 grid-rows-4"
            method="POST"
            onSubmit={() => {
              returnCreatedNote();
            }}
          >
            {/* note title  */}
            <div className="row-span-1 flex items-center justify-center">
              <label
                className="mr-3 font-sans text-2xl font-medium"
                htmlFor="note-title"
              >
                Title
              </label>
              <input
                className="rounded-lg ring-2 ring-black p-[0.5rem] focus:bg-black focus:text-white transition-all duration-500"
                id="note-title"
                placeholder="Your next todo ..."
                value={title}
                required={true}
              ></input>
            </div>
            {/*  note description */}
            <div className="row-span-2 w-full flex flex-col items-start justify-center">
              <label
                className="w-full font-sans text-2xl font-medium"
                htmlFor="note-description"
              >
                Description
              </label>
              <textarea className="rounded-lg ring-2 ring-black"></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateNote;
