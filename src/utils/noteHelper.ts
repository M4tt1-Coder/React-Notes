// https://www.prisma.io/docs/getting-started/quickstart-sqlite
import { PrismaClient } from "@prisma/client";
import { Note, UUID_ZOD } from "./types";

const prisma = new PrismaClient();

export const notesManager = () => {
  const createNote = async (note: Note) => {
    prisma.note.create({
      data: {
        title: note.title,
        description: note.description,
      },
    });
  };
  const getNote = async (id: string): Promise<Note | null> => {
    const validNote = UUID_ZOD.safeParse(id);
    if (!validNote.success) {
      console.error(`Invalid note id: ${id}!`);
      return null;
    }
    return await prisma.note.findUnique({
      where: {
        id: id,
      },
    });
  };
  const getNotes = async (): Promise<Note[]> => {
    return await prisma.note.findMany();
  };
  const updateNote = async (
    id: string,
    note: Partial<Note>
  ): Promise<Note | null> => {
    const validNote = UUID_ZOD.safeParse(id);
    if (!validNote.success) {
      console.error(`Invalid note id: ${id}!`);
      return null;
    }
    return await prisma.note.update({
      where: {
        id: id,
      },
      data: note,
    });
  };
  const deleteNote = async (id: string): Promise<Note | null> => {
    const validNote = UUID_ZOD.safeParse(id);
    if (!validNote.success) {
      console.error(`Invalid note id: ${id}!`);
      return null;
    }
    return await prisma.note.delete({
      where: {
        id: id,
      },
    });
  };
  return {
    createNote,
    getNote,
    getNotes,
    updateNote,
    deleteNote,
  };
};
