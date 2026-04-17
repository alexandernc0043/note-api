import * as service from '../services/noteService.js';
export async function getNotesHandler(req, res) {
  const notes = await service.getNotes();
  res.status(200).json(notes);
}
export async function createNoteHandler(req, res) {
  const { title, content } = req.body;
  const newNote = await service.createNote({ title, content });
  res.status(201).json(newNote);
}
