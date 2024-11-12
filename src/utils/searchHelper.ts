import type { Note } from "./types";

/**
 *  Takes in the a list of notes and returns the result filtered by a search string.
 *
 *  Fails when the notes are empty.
 *
 * @param notes - Current list of notes.
 * @param searchString - The search string entered by the user.
 * @returns A filtered list of notes
 */
export function filterNotesWithSearchString(
  notes: Note[],
  searchString: string
): Note[] {
  if (searchString === "") return notes;
  // filter argument notes
  // when the title / description / date string contain
  // return the note in the notes array
  return notes.filter((note) => {
    if (
      note.date.toLocaleTimeString().includes(searchString) ||
      note.title.includes(searchString) ||
      note.description!.includes(searchString)
    )
      return note;
  });
}
