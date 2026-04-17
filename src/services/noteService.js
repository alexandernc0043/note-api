import * as repo from '../repositories/noteRepo.js';
export async function getNotes() {
  const notes = await repo.getAllNotes();
  return notes;
}
export async function createNote(data) {
  const newNote = await repo.createNote(data);
  return newNote;
}
