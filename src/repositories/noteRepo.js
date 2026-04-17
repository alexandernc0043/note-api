import prisma from '../config/db.js';
export async function getAllNotes() {
  const notes = await prisma.note.findMany();
  return notes;
}
export async function createNote(data) {
  const newNote = await prisma.note.create({ data });
  return newNote;
}
